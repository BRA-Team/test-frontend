import "../stiles/button.css";

export default function RoomsExport() {
  return (
    <body>
      <div style={{ height: "200px" }}></div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        ROOM: VFKCKY
      </h1>
      <h3 style={{ textAlign: "center", color: "white" }}>
        In this game, only the best emerge victorious.
      </h3>
      <hr style={{width : "400px"}}></hr>
      <h3 style={{ textAlign: "center", color: "white" }}>
        sad
      </h3>
      <div class="column-button-group">
        <div class="row-button-group">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
          <label style={{ textAlign: "center", color: "white" }}>
            sad
          </label>
        </div>
        <div class="row-button-group">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
          <label style={{ textAlign: "center", color: "white" }}>
            sad
          </label>
        </div>
        <div class="row-button-group">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
          <label style={{ textAlign: "center", color: "white" }}>
            sad
          </label>
        </div>
      </div>
      <div class="row-button-group">
        <button class="button">
            PASS
        </button>{" "}
        <button class="button" style={{ background: "purple" }}>
            VOTE SKIP
        </button>{" "}
        <button class="button" style={{ background: "green" }}>
            ANSWER
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
        <button class="button" style={{ background: "green" }}>
            SHOW SETTINGS
        </button>{" "}
        <button class="button">
          <a href="joinroom" style={{ textDecoration: "none", color: "inherit" }}>
            LEAVE ROOM
          </a>
        </button>{" "}
      </div>
    </body>
  );
}
