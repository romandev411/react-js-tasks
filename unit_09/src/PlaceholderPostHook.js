import React, { useEffect, useState } from "react";

function PlaceholderPostHook() {
    const [posts, setPosts] = useState([]);

    function getDataPosts() {
        return fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then((response) => {
                return response.json();
            }).then((data) => {
                return data;
            });
    }

    useEffect(()=> {
        getDataPosts().then((data) => {
            setPosts(data);
        });
    }, [])

    return (
        <div>
            <h1>Posts</h1>

            {
                posts.map((item, i) => {
                    return (
                        <section className="item-post" key={i}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </section>
                    )
                })
            }
        </div>
    );
}

export default PlaceholderPostHook;
