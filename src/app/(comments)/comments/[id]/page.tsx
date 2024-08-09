import React from 'react';
import {commentService} from "@/services/api.services";
import Link from "next/link";

type Params = {
    params: { id: string }
}
const CommentPage = async ({params}: Params) => {
    let comment = await commentService.getCommentById(params.id);
    return (
        <div>
            <h3 className={"text-center font-bold"}>Comment Page {params.id}</h3>
            <ul>
                <li>Id: {comment?.id} : {comment?.name}</li>
                <li>Body: {comment?.body}</li>
                <li>
                    <Link href={`/posts/${comment?.postId}`}>Post ID: {comment?.postId}</Link>
                </li>
                <li>Email: {comment?.email}</li>
            </ul>
        </div>
    );
};

export default CommentPage;