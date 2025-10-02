import { Suspense, useContext } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import {Button } from '@/components/ui/button';
import PostsList from '../ui/Posts/PostsList';
import PostsSkeleton from '../ui/skeletons/PostsSkeletons';
import styles from './LatestPosts.module.css';
import ErrorBoundary from '../errors/ErrorBoundary';
import { PostsLastPageContext } from '@/lib/context/PostsLastPageContext';

export default function LatestPosts() {
  const context = useContext(PostsLastPageContext);
  if(!context) {
    throw new Error("PostsLastPageContext is not available");
  }
  const { page, setPage } = context;

  return (
    <>
      <div className={styles.latestPostsContainer}>
        <h2 className="text-4xl font-bold mb-6">Latest Posts</h2>
        <Button className={styles.create_post_button} variant="outline">
            <PlusIcon className="size-6" />Create Post
        </Button>
      </div>
      <ErrorBoundary message="Failed to load posts.">
        <Suspense fallback={<PostsSkeleton />}>
          <PostsList page={page} setPage={setPage} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
