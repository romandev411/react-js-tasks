function CommentListHook({comment = []}) {
    return (
        <div className="commentslist2">
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

export default CommentListHook;
