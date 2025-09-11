import { PlusIcon } from '@heroicons/react/24/solid';
import {Button } from '@/components/ui/button';

export default function LatestPosts() {
  return (
    <main className="flex justify-between mt-3">
        <h2 className="text-4xl font-bold mb-6">Latest Posts</h2>
        <Button className="">
            <PlusIcon className="size-6" />Create Post
        </Button>
    </main>
  );
}
