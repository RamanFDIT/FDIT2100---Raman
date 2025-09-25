import { useState } from "react";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api";
import Post from "@/components/ui/Posts/post";
import  {ArrowRightIcon} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import styles from './postsList.module.css';

export default function PostsList() {
  const [page, setPage] = useState(0);

  const { 
    data,
    fetchNextPage,
    hasNextPage,
  } = useSuspenseInfiniteQuery({
    queryKey: ["posts"],
    queryFn:  ({pageParam}) => fetchPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (mostRecentPage) => {
      return mostRecentPage.skip + mostRecentPage.limit < mostRecentPage.total ? page + 1 : undefined;
    }
  });
  console.log('data', data);
  return (
    <>
      <ul>
        {data.pages.map((page, pageIndex) => {
          return page.posts.map((post, postIndex) => (
              <Post key={post.id} post={post} isLast={postIndex === page.posts.length - 1 && pageIndex === data.pages.length - 1} />
          ));
        })}
      </ul>
      {hasNextPage && <div className="flex justify-end">
        <Button variant="link" className={styles.loadMoreButton} onClick={( ) => {
          setPage (page => page + 1);
          fetchNextPage();
        }}>Load More <ArrowRightIcon/> </Button>
        </div>
      }
    </>  
  );
}  