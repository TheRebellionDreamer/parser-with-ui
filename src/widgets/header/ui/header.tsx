"use client";
import {
	AppBar,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material";

export function Header() {
	const trigger = useScrollTrigger();
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<AppBar
				elevation={1}
				sx={{
					bgcolor: "background.default",
					display: { xs: "none", sm: "block" },
				}}
			>
				<Toolbar>
					<Typography variant="h5" fontWeight={700} color="text.secondary">
						Лучшие бары Нижнего
					</Typography>
				</Toolbar>
			</AppBar>
		</Slide>
	);
}
