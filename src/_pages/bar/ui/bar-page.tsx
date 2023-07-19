import { groups } from "@/entities/group";
import { PostList } from "@/widgets/post-list/ui/post-list";
import { ArrowBack } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { UUID } from "crypto";
import Link from "next/link";

type Props = {
	id: UUID;
};

export default function BarPage({ id }: Props) {
	const selectedGroup = groups.find((group) => group.id === id);

	if (!selectedGroup) {
		throw new Error("Группа не найдена");
	}

	return (
		<main>
			<Stack
				direction="row"
				sx={{
					alignItems: "center",
					justifyContent: { sm: "start", md: "space-between" },
					gap: { xs: 1, sm: 1, md: 0 },
				}}
			>
				<IconButton LinkComponent={Link} href="/">
					<ArrowBack />
				</IconButton>
				<Typography variant="h5" color="text.secondary" noWrap>
					{selectedGroup.name}
				</Typography>
			</Stack>
			<PostList id={id} />
		</main>
	);
}
