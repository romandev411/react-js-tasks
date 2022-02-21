import { useState, useEffect } from 'react';

function CommentListHook({data: comment}) {
    const [data, setData] = useState([]);

    function onlyEven() {
        const filterData = data.filter((el, i) => {
            return i % 2 === 0;
        });

        setData(filterData);
    }

    useEffect(() => {
        if (comment.length > 0) setData(comment);
    }, [comment]);

    return (
        <div className="commentslist2">
            <div>
                <button onClick={onlyEven}>Only even comments</button>
            </div>

            {
                data.map((item, i) => {
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

export default CommentListHook;
