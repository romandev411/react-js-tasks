import React, { useState } from "react";

function CommentHook() {
    const [comment, setComment] = useState([]);

    function selectHandler(e) {
        const id = e.target.value;

        getData(id).then((data) => {
            setComment(data);
        });
    }

    function getData(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            })
    }

    return (
        <div className="comments">
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            {
                comment.map((item, i) => {
                    return (
                        <section className="item-post" key={i}>
                            <h2>{item.name}</h2>
                            <p>{item.body}</p>
                        </section>
                    );
                })
            }
        </div>

    );
}

export default CommentHook;
