const Comments = ({comList}) => {
    
    return (
        <>
        <h4>Comments</h4><hr/>
        {comList.map(comment => <div>
            <p>{comment.text}</p>
            <h6>-{comment.author}</h6>
            <hr/>
        </div>)}
        </>
    );
}

export default Comments;