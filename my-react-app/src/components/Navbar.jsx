import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/deliverables">Project Deliverables</Link>
      <Link to="/team">Meet the Team</Link>
    </nav>
  );
}

export default Navbar;
