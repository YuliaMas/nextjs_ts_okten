import React from 'react';
import {postService} from "@/services/api.services";

const UserPostsPage = async ({searchParams} : any) => {
    console.log(searchParams.id);
    let userPosts = await postService.getPostsByUser(searchParams.id)
    console.log(userPosts);
    return (
        <div>
            <ul>
                {
                    userPosts.map(post => (
                        <li key={post.id}>{post.id} - {post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserPostsPage;