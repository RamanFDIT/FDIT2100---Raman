import { HeartIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator";
import Tag from "@/components/ui/Posts/Tag";
import { type Post } from "@/lib/types/post";
import styles from './postsList.module.css';

interface Props {
    post: Post;
    isLast: boolean;
}

export default function Post (props: Props) {
    const { post, isLast } = props;

    return (
        <li key={post.id}>
            <div className="flex">
                <article className="mr-4">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className={styles.postBody}>{post.body}</p>
                    <div className="my-6">
                        {post.tags.map(tag =>(
                            <Tag key={tag} tag={tag}/>
                        ))}
                    </div>
                    <div className="ml-4">
                        <HeartIcon className="inline size-5 mr-2" />
                        <span className={styles.postLikesAndViews}>{post.reactions.likes}</span>
                    </div>
                    <div className="ml-4">
                        <span className={styles.postLikesAndViews}>{post.views} Views</span>
                    </div>
                </article>
                <img src={`/Photos/${post.id}.jpg`} alt={post.title} className="aspect-[7/4] h-42 object-cover rounded-lg" />
            </div>
            {!isLast && <Separator className="!w-auto mx-4 mt-5 mb-10" />}
        </li>
    )
}