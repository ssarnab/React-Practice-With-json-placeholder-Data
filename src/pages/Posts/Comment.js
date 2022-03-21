const Comment = ({ comments,count }) => {
    return (
        
      <div className="row">
          <h5 className="px-1"> {comments.length } comments</h5>
          {comments &&
            comments.slice(0,count).map((comment) => {
              return <div className="col-12 p-1" key={comment.id}>
                 <div className="comment px-1 pt-1 shadow-lg bg-dark text-white rounded">
                
                    <h5 className="d-inline"> {comment.name}</h5> - <span> {comment.email}</span>
                    <p> {comment.body}</p>
                 </div>
               </div>;
            })}
      </div>
    );
  };
  
  export default Comment;
  