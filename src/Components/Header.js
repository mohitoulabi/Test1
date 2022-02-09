import React from "react";

const Header = (props) => {
  // we use () for writing html inside javascript
  // we use {} for writing javascript inside html
  return (
    <div className="App">
      <header className="App-header">{props.children}</header>
    </div> //semicolon only on outermost tag
  );
};

export default Header;
