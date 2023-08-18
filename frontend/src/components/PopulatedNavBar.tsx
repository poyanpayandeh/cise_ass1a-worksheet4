import { IoMdArrowDropdown } from "react-icons/io";
import NavBar from "./nav/NavBar";
import NavDropdown from "./nav/NavDropdown";
import NavItem from "./nav/NavItem";

const PopulatedNavBar = () => {
  return (
    <NavBar>
      <NavItem>Speed</NavItem>
      <NavItem route="/" end>
        Home
      </NavItem>
      <NavItem dropdown route="/articles">
        Articles <IoMdArrowDropdown />
      </NavItem>
      <NavDropdown>
        <NavItem route="/articles">View Articles</NavItem>
        <NavItem route="/articles/new">Submit New</NavItem>
      </NavDropdown>
    </NavBar>
  );
};

export default PopulatedNavBar;
