import React from "react";
import withAuthentication from "./withAuthentication";

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      {props.isLogin ? (
        <p>
          This is yours. You have login as <b>David</b>
        </p>
      ) : (
        <p style={{ color: "red" }}>Please login !</p>
      )}
    </div>
  );
}

export default withAuthentication(Home);
