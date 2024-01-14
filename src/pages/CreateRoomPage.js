import "../stiles/button.css";

export default function RoomsExport() {
  return (
    <body>
      <div style={{ height: "200px" }}></div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Kick off Picks - Create Room
      </h1>
      <h3 style={{ textAlign: "center", color: "gray" }}>
        Wellcome back! Please provide some details.
      </h3>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Select one of the folowing tournaments...
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
            Liga 1 - Superliga
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
            Champions League
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
            World Cup
          </label>
        </div>
      </div>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Max number of players in a room
      </h3>
      <div class="row-button-group">
        <input type="text" style={{position: "center", textAlign: "center", background:"transparent"}}></input>
      </div>
      <h3 style={{ textAlign: "center", color: "white" }}>
        Votes to skip the current question
      </h3>
      <div class="row-button-group">
        <input type="text" style={{position: "center", textAlign: "center", background:"transparent"}}></input>
      </div>
      <div class="row-button-group">
        <button class="button">
          <a href="rooms" style={{ textDecoration: "none", color: "inherit" }}>
            BACK
          </a>
        </button>{" "}
        <button class="button" style={{ background: "green" }}>
          <a href="signin" style={{ textDecoration: "none", color: "inherit" }}>
            CREATE A ROOM
          </a>
        </button>{" "}
      </div>
    </body>
  );
}
