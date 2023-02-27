import { Navigate, useNavigate } from "react-router-dom";

const Post = () => {
  const status = 400;

  const onCLick = () => {};

  if (status === 400) {
    return <Navigate to="/notfound " />;
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onCLick}>Click</button>
    </div>
  );
};

export default Post;
