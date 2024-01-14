import Navbar from "../components/navbar";
import "../Home.css";
import "../stiles/button.css";

export default function RoomsExport() {
  return (
    <body>
      <Navbar />
      <div style={{height:"200px"}}></div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Kick off Picks - Quizz Party
      </h1>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Wellcome back! Please select what do you want to do.
      </h3>
      <div class="row-button-group">
        <button class="button">
          <a href="signin" style={{ textDecoration: "none", color: "inherit" }}>
            JOIN A ROOM
          </a>
        </button>{" "}
        <button class="button" style={{ background: "green" }}>
          <a href="createroom" style={{ textDecoration: "none", color: "inherit" }}>
            CREATE A ROOM
          </a>
        </button>{" "}
      </div>
      <div class="column-button-group">
        <button class="button" style={{ width: "320px", background: "red" }}>
          <a href="signin" style={{ textDecoration: "none", color: "inherit" }}>
            BACK
          </a>
        </button>{" "}
      </div>
    </body>
  );
}
