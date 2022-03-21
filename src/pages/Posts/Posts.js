import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Post from "./Post";
const Posts = () => {
  const { id } = useParams();
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      {loading && (
        <div className="loading text-center">Loading........Please wait! </div>
      )}
      {error && <div className="text-danger text-center"> {error}</div>}
      {posts && (
        <Post
          posts={
            id
              ? posts.filter((post) => parseInt(post.userId) === parseInt(id))
              : posts
          }
          title={id ? "User" : "All"}
        />
      )}
    </>
  );
};

export default Posts;
