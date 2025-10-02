import { Suspense } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import {Button } from '@/components/ui/button';
import PostsList from '../ui/Posts/PostsList';
import PostsSkeleton from '../ui/skeletons/PostsSkeletons';
import styles from './LatestPosts.module.css';
import ErrorBoundary from '../errors/ErrorBoundary';

export default function LatestPosts() {
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
          <PostsList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
