const base: string = 'https://jsonplaceholder.typicode.com';

const urlBuilder = {
    users: {
        userBaseUrl: '/users',
        allUsers: () => base + urlBuilder.users.userBaseUrl,
        singleUser: (id: string | number) => base + urlBuilder.users.userBaseUrl + '/' + id,
        // postsByUser: (id: string | number) => base + '/' + id + '/posts',
    },
    posts: {
        postBaseUrl: '/posts',
        allPosts: () => base + urlBuilder.posts.postBaseUrl,
        singlePost: (id: string | number) => base + urlBuilder.posts.postBaseUrl + '/' + id,
        postsByUser: (id: string | number) => base + urlBuilder.users.userBaseUrl + '/' + id + urlBuilder.posts.postBaseUrl,
    },
    comments: {
        commentBaseUrl: '/comments',
        allComments: () => base + urlBuilder.comments.commentBaseUrl,
        singleComment: (id: string | number) => base + urlBuilder.comments.commentBaseUrl + '/' + id,
    }
}

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        let users = await fetch (urlBuilder.users.allUsers())
            .then(value => value.json());
        console.log(users);
        return users;
    },
    getUserById: async (id: string | number): Promise<IUser | null> => {
        let user: IUser = await fetch(urlBuilder.users.singleUser(id))
            .then(value => value.json());
        console.log(user);
        return user;
    }
};

const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        let posts = await fetch(urlBuilder.posts.allPosts())
            .then(value => value.json());
        console.log(posts);
        return posts;
    },
    getPostById: async (id: string | number): Promise<IPost | null> => {
        let post: IPost = await fetch(urlBuilder.posts.singlePost(id))
            .then(value => value.json());
        console.log(post);
        return post;
    },
    getPostsByUser: async (id: string | number): Promise<IPost[]> => {
        let postsByUser: IPost[] = await fetch(urlBuilder.posts.postsByUser(id))
            .then(value => value.json());
        console.log(postsByUser);
        return postsByUser;
    }
};

const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        let comments = await fetch(urlBuilder.comments.allComments())
            .then(value => value.json());
        console.log(comments);
        return comments;
    },
    getCommentById: async (id: string | number): Promise<IComment | null> => {
        let comment: IComment = await fetch(urlBuilder.comments.singleComment(id))
            .then(value => value.json());
        console.log(comment);
        return comment;
    }
}


export {
    userService,
    postService,
    commentService
}