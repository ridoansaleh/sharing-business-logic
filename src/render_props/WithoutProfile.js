import React, { useState, useEffect } from "react";

function Profile() {
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
      <h1>Profile Page</h1>
      {isLogin ? (
        <>
          <div>
            Name : <b>David</b>
          </div>
          <div>Address : Jalan Soekarno-Hatta No. 1</div>
          <div>Last login : 13:50:01 May 29th, 2020</div>
        </>
      ) : (
        <p style={{ color: "red" }}>Please login !</p>
      )}
    </div>
  );
}

export default Profile;
