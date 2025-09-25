import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api";
import Post from "@/components/ui/Posts/post";

export default function PostsList() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  console.log('data', data);
  return (
      <ul>
        {data.posts.map((post, index) => (
          <Post key={post.id} post={post} isLast={index === data.posts.length - 1}/>
        ))}
      </ul>
  );
}  