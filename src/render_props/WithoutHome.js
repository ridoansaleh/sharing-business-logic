import React, { useState, useEffect } from "react";

function Home() {
  const [isLogin, setLogin] = useState(false);
  const [isChecked, setCheck] = useState(false);

  const callApiToCheckLoginStatus = () => {
    setTimeout(() => {
      setCheck(true);
      setLogin(true);
    }, 1000);
  };

  useEffect(() => {
    callApiToCheckLoginStatus();
  }, []);

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
