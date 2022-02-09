import "./App.css";
import logo from "./logo.svg";
import logo2 from "file:///C:/Users/mhula/Downloads/test.svg";
import Image from "./Components/Image";
import Paragraph from "./Components/Paragraph";
import Hyperlink from "./Components/Hyperlink";
import Header from "./Components/Header";

function App() {
  return (
    <Header>
      <Image myLogo={logo} />
      <Image myLogo={logo2} />
      <Paragraph myP="Edit MOHI" />
      <Hyperlink myH="https://reactjs.org" />
    </Header>
  );
}

export default App;
