import React from "react";
import useAuthentication from "./useAuthentication";

function Home() {
  const { isChecked, isLogin } = useAuthentication();

  if (!isChecked) {
    return <h2>Loading..</h2>;
  }
  return (
    <div>
      <h1>Home Page</h1>
      {isLogin ? (
        <p>
          This is yours. You have login as <b>David</b>
        </p>
      ) : (
        <p style={{ color: "red" }}>Please login !</p>
      )}
    </div>
  );
}

export default Home;
