import { UUID } from "crypto";

export type Group = {
	id: UUID;
	name: string;
	url: Url;
	address: string;
	phone: Phone | null;
	imagePath: string;
};
