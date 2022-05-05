import NavBar from "./NavBar.component";

const NavBarContainer = () => {
  const links = [
    { path: "/about-us", text: "About" },
    { path: "/our-services", text: "Our Services" },
    { path: "/gallery", text: "Gallery" },
    { path: "/contact-us", text: "Contact Us" },
  ];

  const containerStates = {
    links: links,
  };
  return <NavBar {...containerStates} />;
};

export default NavBarContainer;
