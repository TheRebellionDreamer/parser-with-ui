import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

import { Post } from "@/entities/post";
import { formatTime } from "@/shared/lib/format-time";

export async function extractPostsOfGroup(
	target: Url,
	countOfPosts: number,
): Promise<Post[]> {
	const groupsPosts: Post[] = [];

	/* Запускаем браузер и открываем новую страницу */
	const browser = await puppeteer.launch({ headless: "new" });
	const page = await browser.newPage();

	try {
		await page.goto(target);

		const content = await page.content();

		const $ = cheerio.load(content);

		const groupName = $(".page_name").text();

		if (!groupName) {
			throw new Error("Имя группы не найдено");
		}

		/* Находим посты, берем только n-число постов и текст внутри блока  */
		const textList = getArrayBySelector($, ".wall_post_text", countOfPosts);

		/* Так же и с датами */
		const dateList = getArrayBySelector(
			$,
			".PostHeaderSubtitle__item",
			countOfPosts,
		);

		/* Объединяем и добавляем в массив результата */
		const result = textList.map(
			(value, index): Post => ({
				text: value,
				date: dateList[index],
			}),
		);

		groupsPosts.push(...result);

		console.log(
			`✅ Данные из ${groupName} успешно получены. ${formatTime(
				new Date(),
			)}`,
		);
	} catch (error) {
		if (error instanceof Error) {
			console.log(
				`❌ Не удалось получить данные по адресу. Ошибка: ${
					error.message
				}. ${formatTime(new Date())}`,
			);
		}
	}

	/* Закрываем браузер */
	await browser.close();

	return groupsPosts;
}

function getArrayBySelector(
	$: cheerio.CheerioAPI,
	selector: ".wall_post_text" | ".PostHeaderSubtitle__item",
	count: number,
) {
	return $(selector)
		.map((_, el) => $(el).text())
		.toArray()
		.slice(0, count);
}
