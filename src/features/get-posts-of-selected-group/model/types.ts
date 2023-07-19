import { Post } from "@/entities/post";

export type GroupPost = {
	groupName: string;
	posts: Post[];
};
