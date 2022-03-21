import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Comment from './Comment';
const Comments = ({ id }) => {

  let [count, setCount] = useState(1);
  let [visible, setVisible] = useState(false);
  let [hidden, setHidden] = useState(true);
  const { data: comments, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  const handleShowMore = () => {
    if ((comments.length - count) >= 2) {
      setCount(count += 2)
    } else {
      setCount(count = comments.length)
    }
    if (count === comments.length) {
      setVisible(true)
      setHidden(false)
    }
  }
  
  const handleHide = () => {
    setCount(1)
    setVisible(false)
    setHidden(true)
  }
  return (
    <>
      {loading &&
        <div className="loading text-center">Loading........Please wait! </div>
      }
      {error && <div className="text-danger text-center"> {error}</div>}
      {comments &&
        <Comment comments={comments} count={count}
        />
      }
      <button onClick={handleShowMore} className="btn btn-sm bg-success text-white" hidden={visible}> show more comments</button>
      <button onClick={handleHide} className="btn btn-sm bg-danger text-white" hidden={hidden }>Hide</button>
     
    </>);
};

export default Comments;
