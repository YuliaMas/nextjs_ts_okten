import React, {FC} from 'react';
import Link from "next/link";

interface IProps {
    comment: IComment;
}
const CommentComponent:FC<IProps>  = ({comment}) => {
    return (
        <div>
            <Link href={`/comments/${comment.id}`}>ID:{comment.id} - {comment.name} </Link>
        </div>
    );
};

export default CommentComponent ;