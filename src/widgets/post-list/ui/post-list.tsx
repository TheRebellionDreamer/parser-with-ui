import { Post } from "@/entities/post";
import { UUID } from "crypto";

const countOfPosts = 5;

async function getPosts(id: UUID) {
	const response = await fetch(
		`http://localhost:3000/api/posts?id=${id}&c=${countOfPosts}`,
	);

	if (!response.ok) {
		throw new Error("Не удалось получить посты");
	}

	return response.json() as Promise<Post[]>;
}

type Props = {
	id: UUID;
};

export async function PostList({ id }: Props) {
	const posts = await getPosts(id);

	return (
		<ul>
			{posts.map((post) => (
				<li key={post.text}>
					{post.text} {post.date}
				</li>
			))}
		</ul>
	);
}
