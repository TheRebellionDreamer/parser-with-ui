import { ThemeRegistry } from "@/app/theme";
import { Header } from "@/widgets/header";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
	subsets: ["cyrillic"],
	weight: ["400", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={ptSans.className}>
				<ThemeRegistry options={{ key: "mui" }}>
					<Container sx={{ py: 2, minHeight: "100dvh" }}>
						{children}
					</Container>
				</ThemeRegistry>
			</body>
		</html>
	);
}
