import React from 'react';
import {postService} from "@/services/api.services";
import PostComponent from "@/components/PostComponent";

const PostsPage = async () => {
    let allPosts = await postService.getAllPosts();
    return (
        <div className={"text-center"}>
            <h1 className={"font-bold"}>Posts Page</h1>
            <ul  className={"text-justify m-24"}>
                {
                    allPosts.map(post => (
                        // <li>{post.id} : {post.title}</li>

                             <PostComponent key={post.id} post={post}/>

                    ))
                }
            </ul>

        </div>
    );
};

export default PostsPage;