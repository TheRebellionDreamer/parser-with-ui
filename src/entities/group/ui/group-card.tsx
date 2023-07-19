import { Launch, Phone } from "@mui/icons-material";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography
} from "@mui/material";
import Link from "next/link";
import { Group } from "../model/types";

type Props = {
	group: Group;
};

export function GroupCard({ group }: Props) {
	const { name, address, imagePath, id, url, phone } = group;

	return (
		<Card>
			<CardActionArea LinkComponent={Link} href={`/${id}`}>
				<CardMedia
					component="img"
					height={194}
					image={imagePath}
					alt={name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{address}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ gap: 1 }}>
				<IconButton LinkComponent={Link} href={url} target="_blank">
					<Launch />
				</IconButton>
				{phone && (
					<IconButton component="a" href={`tel:${phone}`}>
						<Phone />
					</IconButton>
				)}
			</CardActions>
		</Card>
	);
}
