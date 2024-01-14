import "../stiles/button.css";

export default function RoomsExport() {
  return (
    <body>
      <div style={{ height: "100px" }}></div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        ROOM: VFKCKY
      </h1>
      <h3 style={{ textAlign: "center", color: "gray" }}>
        In this game, only the best emerge victorious.
      </h3>
      <hr style={{width : "400px"}}></hr>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Wellcome back! You are the host of this room:
      </h3>
      <h4 style={{ textAlign: "center", color: "gray" , marginTop : "-10px"}}>
        - Players are waiting for you to start the game..
      </h4>
      <h4 style={{ textAlign: "center", color: "gray" , marginTop : "-20px"}}>
        - You can change anytime the room settings:
      </h4>
      <h4 style={{ textAlign: "center", color: "gray" , marginTop : "-20px"}}>
        - You can use the chat to share the room code with
      </h4>
      <h4 style={{ textAlign: "center", color: "gray" , marginTop : "-20px"}}>
        your friends so they can join the room
      </h4>
      <div class="row-button-group">
      <button class="button">
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            HOME
          </a>
        </button>{" "}
        <button class="button" style={{background : "orange"}}>
          <a href="competitions" style={{ textDecoration: "none", color: "inherit" }}>
            CHAT
          </a>
        </button>{" "}
        <button class="button" style={{background : "green"}}>
          <a href="room" style={{ textDecoration: "none", color: "inherit" }}>
            START
          </a>
        </button>{" "}
      </div>
      <hr style={{width : "400px"}}></hr>
      <div class="row-button-group">
        <div class="column-button-group">
          <label style={{ textAlign: "center", color: "white" }}>
            Max players
          </label>
          <label style={{ textAlign: "center", color: "white" }}>
            3
          </label>
        </div>
        <div class="column-button-group">
          <label style={{ textAlign: "center", color: "white" }}>
            Tournament
          </label>
          <label style={{ textAlign: "center", color: "white" }}>
           Liga 1 - Superliga
          </label>
        </div>
        <div class="column-button-group">
          <label style={{ textAlign: "center", color: "white" }}>
            Votes to skip
          </label>
          <label style={{ textAlign: "center", color: "white" }}>
            2
          </label>
        </div>
      </div>
      <div class="column-button-group">
        <button class="button" style={{width : "350px", background : "green"}}>
          <a href="room" style={{ textDecoration: "none", color: "inherit" }}>
            MAKE QUIZ
          </a>
        </button>{" "}
        <button class="button" style={{width : "350px"}}>
            SHOW SETTINGS
        </button>{" "}
        <button class="button" style={{width : "350px", background : "red"}}>
          <a href="rooms" style={{ textDecoration: "none", color: "inherit" }}>
            LEAVE ROOM
          </a>
        </button>{" "}
      </div>
    </body>
  );
}
