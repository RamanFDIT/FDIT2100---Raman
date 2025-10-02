import { createContext } from "react";
import { type PostLastPageState } from "../types/post";

export const PostsLastPageContext = createContext<PostLastPageState | null>(null);

