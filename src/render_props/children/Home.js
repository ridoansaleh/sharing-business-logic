import React from "react";
import Authentication from "./Authentication";

function Home() {
  return (
    <Authentication>
      {(isLogin) => (
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
      )}
    </Authentication>
  );
}

export default Home;
