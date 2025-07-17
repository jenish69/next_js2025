"use client";

import { use } from "react";

const singleProfilePost = (props) => {

    const user =  use(props.params);
    console.log(user);

    return (
        <h1>user = {user.username}, postId = {user.postid}</h1>
    );
}

export default singleProfilePost;