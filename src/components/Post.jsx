import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

const Post = () => {
  const status = 200;

  const naviagate = useNavigate();

  const onCLick = () => {
    console.log("Hello");
    naviagate("/about");
  };

  if (status === 400) {
    return <Navigate to="/notfound " />;
  }
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onCLick}>Click</button>
      <Routes>
        <Route path="/show" element=<h1>Hello Dev</h1> />
      </Routes>
    </div>
  );
};

export default Post;
