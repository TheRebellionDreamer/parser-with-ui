import { Metadata } from "next";
import MainPage from "@/_pages/main";

export const metadata: Metadata = {
	title: "НН Бар - Новости | Главная",
	description: "Бары и лучшие заведения Нижнего Новгорода",
};

export default async function Main() {
	return <MainPage />;
}
