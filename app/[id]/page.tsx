import { groups } from "@/entities/group";
import BarPage from "@/_pages/bar";
import { UUID } from "crypto";
import { Metadata } from "next";

type Props = {
	params: {
		id: UUID;
	};
};

export function generateMetadata({ params }: Props): Metadata {
	const selectedGroup = groups.find((group) => group.id === params.id);

	if (!selectedGroup) {
		throw new Error("Группа не найдена");
	}

	return {
		title: `НН Бар - Новости | ${selectedGroup.name}`,
	};
}

export default function SelectedBar({ params }: Props) {
	return <BarPage id={params.id} />;
}
