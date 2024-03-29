import "../stiles/navbar.css";

const Navbar = () => {
  return (
    <div class="navbar">
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="rooms">Game</a>
          </li>
          <li>
            <a href="competitions">CHAT</a>
          </li>
          <li>
            <a href="signin">Log in</a>
          </li>
          <li>
            <a href="signup">Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function NavbarExport() {
  return <Navbar />;
}
