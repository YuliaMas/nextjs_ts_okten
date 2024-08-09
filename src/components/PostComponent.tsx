import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    post: IPost;
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <li>
           <Link href={`/posts/${post.id}`}> {post.id} : {post.title} </Link>
        </li>
    );
};

export default PostComponent;