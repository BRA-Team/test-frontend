import Navbar from "./components/navbar";
import "./Home.css";

export default function HomeExport() {
  return (
    <body>
      <Navbar />
      <h1 style={{ textAlign: "center", color: "white" }}>HOME</h1>
      <div class="button-group">
        {" "}
        <button class="button"><a  href="signin" style={{textDecoration : "none", color : "inherit"}}>SignIn</a></button>{" "}
        <button class="button"><a  href="competitions" style={{textDecoration : "none", color : "inherit"}}>Chat</a></button>{" "}
        <button class="button"><a  href="rooms" style={{textDecoration : "none", color : "inherit"}}>Game</a></button>{" "}
        <button class="button"><a  href="signin" style={{textDecoration : "none", color : "inherit"}}>Log Out</a></button>{" "}
      </div>
    </body>
  );
}
