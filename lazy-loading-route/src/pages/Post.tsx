import { LoaderFunctionArgs, useLoaderData } from "react-router";
import PostItem from "../components/PostItem";

export default function Post() {
   const post = useLoaderData();
   return <PostItem post={post} />
}

export function loader({ params }: LoaderFunctionArgs) {
   const postId = params.id;
   return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}