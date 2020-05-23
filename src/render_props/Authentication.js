import React, { useState, useEffect } from "react";

function Authentication(props) {
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
  return props.render(isLogin);
}

export default Authentication;
