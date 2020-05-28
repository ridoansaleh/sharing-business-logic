import React from "react";
import Authentication from "./Authentication";

function Profile() {
  return (
    <Authentication>
      {(isLogin) => (
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
      )}
    </Authentication>
  );
}

export default Profile;
