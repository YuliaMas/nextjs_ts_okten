import React from 'react';
import {postService} from "@/services/api.services";
import Link from "next/link";

type Params = {
    params: {id: string};
}
const PostPage = async ({params}:Params) => {
    let post = await postService.getPostById(params.id);
    return (
        <div>
            <h3 className={"font-bold m-6 text-center"}> Post Page {params.id} </h3>
            <ul className={"text-center"}>
                <li className={"font-bold"}> Id: {post?.id} : {post?.title} </li>
                <li className={"w-1/4 m-auto"}> {post?.body} </li>
                <li>
                    <Link href={`/users/${post?.userId}`}>  UserId: {post?.userId} </Link>
                </li>
            </ul>
        </div>
    );
};

export default PostPage;