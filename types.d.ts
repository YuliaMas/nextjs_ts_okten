 interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
 }

 interface IPost {
     id: number;
     userId: number;
     title: string;
     body: string;
 }

 interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
 }