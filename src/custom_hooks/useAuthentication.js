import React, { useState, useEffect } from "react";

function useAuthentication() {
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

  return { isChecked, isLogin };
}

export default useAuthentication;
