import "../Home.css";
import "../stiles/button.css";

export default function RoomsExport() {
  return (
    <body>
      <div style={{height:"200px"}}></div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Kick off Picks - Join Room
      </h1>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Wellcome back! Please enter the room code.
      </h3>
      <div class="row-button-group">
        <input type="text" style={{position: "center", textAlign: "center", background:"transparent"}}></input>
      </div>
      <div class="row-button-group">
      <button class="button" style={{background: "red" }}>
          <a href="rooms" style={{ textDecoration: "none", color: "inherit" }}>
            BACK
          </a>
        </button>{" "}
        <button class="button">
          <a href="room" style={{ textDecoration: "none", color: "inherit" }}>
            JOIN THIS ROOM
          </a>
        </button>{" "}
      </div>
    </body>
  );
}
