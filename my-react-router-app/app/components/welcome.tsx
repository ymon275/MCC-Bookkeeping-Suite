import MCCLogo from "./images/MCC Logo.svg";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";

export function Welcome() {
  return (
    <div className="text-center" style={{ marginTop: "5rem" }}>
      <Image src={MCCLogo} width={"20%"} roundedCircle />
      <h1>Welcome to the MCC Utility Application</h1>
      <h2>WIP!</h2>
      <p>
        This application is a work in progress and is intended to assist with
        various tasks related to the Murfreesboro Chess Club. It is not yet
        fully functional, but we are working on it!
      </p>
    </div>
  );
}
