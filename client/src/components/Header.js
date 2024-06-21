import React, { useEffect, useRef } from "react";

const Header = ({ setUser }) => {
  const inputRef = useRef(null);

  const handleCopy = () => {
    inputRef.current.disabled = false;
    inputRef.current.select();
    document.execCommand("copy");
    inputRef.current.disabled = true;
  };

  useEffect(() => {
    inputRef.current.value = window.location.href;
    inputRef.current.disabled = true;
    const currUser = window.location.pathname.substr(1);
    setUser(currUser);
  }, [setUser]);

  return (
    <div className="jumbotron" id="header">
      <div className="container">
        <h1 id="title">Stone Paper Scissors</h1>
        <p>Send this link to the player</p>
        <input id="link" type="text" ref={inputRef} />
        <span
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={handleCopy}
        >
          Copy
        </span>
      </div>
    </div>
  );
};

export default Header;
