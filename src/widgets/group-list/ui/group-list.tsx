import { Grid } from "@mui/material";

import { GroupCard, groups } from "@/entities/group";

export async function GroupList() {
	return (
		<Grid container spacing={2}>
			{groups.map((group, index) => (
				<Grid
					key={group.name}
					item
					xs={12}
					sm={6}
					md={index === groups.length - 1 ? true : 4}
				>
					<GroupCard group={group} />
				</Grid>
			))}
		</Grid>
	);
}
