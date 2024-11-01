import Comments from './Comments'
const Post = ({ posts,title }) => {
    return (
      <div className="row">
          <h3 className="text-center py-3">{title} posts</h3>
          {posts &&
            posts.map((post) => {
              return <div className="col-12 p-1" key={post.id}>
                 <div className="post m-1 px-3 py-3 shadow bg-body rounded">
                
                    <h5 className="d-inline"> {post.title}</h5> - <span> {post.userId}</span>
                    <p> {post.body}</p>
                    {/* <Comments id={post.id}/> */} 
                    {/* this is bad practive; will fix this later */}
                 </div>
               </div>;
            })}
      </div>
    );
  };
  
  export default Post;
  