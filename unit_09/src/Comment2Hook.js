import React, { useState } from "react";
import CommentListHook from './CommentListHook';

function Comment2Hook() {
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
        <div className="comments2">
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <CommentListHook comment={comment} />
        </div>

    );
}

export default Comment2Hook;
