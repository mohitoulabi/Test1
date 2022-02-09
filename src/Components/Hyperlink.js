import React from "react";

const Hyperlink = ({ myH }) => {
  return (
    <a
      className="App-link"
      href={myH}
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
};

export default Hyperlink;
