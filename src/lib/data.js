//TEMP

const users = [
    { id: 1, name: "John" },
    {id: 2, name: "Jane"}
]

const posts = [
    { id: 1, title: 'Post 1', body: 'This is the body of post 1', userId: 1 },
    {id: 2,title:'Post 2 ',body:'This is the body of post 2',userId:2}
]

export const getPosts = () => {
    return posts;
};

export const getPost = async (id) => { 
    return posts.find((post) => post.id === id);
}

export const getUser = async (id) => { 
    return posts.find((user) => user.id === id);
}