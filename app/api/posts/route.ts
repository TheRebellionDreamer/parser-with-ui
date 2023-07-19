import { groups } from "@/entities/group";
import { extractPostsOfGroup } from "@/features/get-posts-of-selected-group";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const id = searchParams.get("id");
	const count = searchParams.get("c");

	if (id) {
		const selectedGroup = groups.find((group) => group.id === id);

		if (!selectedGroup) {
			return NextResponse.error();
		}

		const data = await extractPostsOfGroup(
			selectedGroup.url,
			count ? parseInt(count) : 5,
		);

		return NextResponse.json(data);
	} else {
		return NextResponse.error();
	}
}
