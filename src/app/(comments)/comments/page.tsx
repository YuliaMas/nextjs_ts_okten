import React from 'react';
import {commentService} from "@/services/api.services";
import CommentComponent from "@/components/CommentComponent";

const CommentsPage = async () => {
    let allComments = await commentService.getAllComments();
    return (
        <div>
            <h3 className={"text-center font-bold"}>Comments Page</h3>
            <ul>
            {
                allComments.map(comment => (
                    // <li>ID:{comment.id} -  {comment.name}</li>
                    <li key={comment.id}>
                         <CommentComponent  comment={comment}/>
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default CommentsPage;