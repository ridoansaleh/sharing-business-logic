import React from "react";
import withAuthentication from "./withAuthentication";

function Profile(props) {
  return (
    <div>
      <h1>Profile Page</h1>
      {props.isLogin ? (
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

export default withAuthentication(Profile);
