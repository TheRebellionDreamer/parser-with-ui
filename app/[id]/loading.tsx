import { Backdrop, Box, CircularProgress, Stack } from "@mui/material";

export default function Loading() {
	return (
		<Box
			height="100dvh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
		>
			<CircularProgress />
		</Box>
	);
}
