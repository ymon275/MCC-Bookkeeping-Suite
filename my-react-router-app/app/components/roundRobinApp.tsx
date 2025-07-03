import type { JSX } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import PlusLg from "./images/plus-lg.svg";

// Create a table with 15 rows, each row contains a form
function createTable() {
  // Create a row with a form for player name and rating, and buttons for edit and delete
  const row: JSX.Element = (
    <>
      <td>
        <Form>
          <Form.Control type="name" placeholder="Player Name" />
        </Form>
      </td>
      <td>
        <Form>
          <Form.Control type="rating" placeholder="Player Rating" />
        </Form>
      </td>
      <td>
        <Button variant="primary">Edit</Button>{" "}
        <Button variant="danger">Delete</Button>
      </td>
    </>
  );
  // Create an array of 15 rows, each containing the row created above
  // and add a final row with a button to add a new player
  const rows = new Array(15)
    .fill(<></>)
    .map((object: JSX.Element, index) => row);
  rows.push(
    <>
      <td>
        <Button variant="info">+</Button>
      </td>
    </>
  );
  return rows;
}

export function RoundRobinApp() {
  const rows = createTable(); // Call the function to create the table rows
  return (
    <div>
      <h1 style={{ marginLeft: "2rem" }}>Round Robin App</h1>
      <p style={{ marginLeft: "2rem" }}>
        This is a placeholder for the Round Robin application.
      </p>
      {/* Add your Round Robin app components here */}
      <div
        style={{
          display: "inline-block",
          marginLeft: "2rem",
        }}
      >
        <div style={{ marginLeft: "2rem", marginRight: "33%" }}>
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form>
                    <Form.Control type="name" placeholder="Player Name" />
                  </Form>
                </td>
                <td>
                  <Form>
                    <Form.Control type="rating" placeholder="Player Rating" />
                  </Form>
                </td>
                <td>
                  <Button variant="primary">Edit</Button>{" "}
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
              {rows.map((row, index) => (
                <tr key={index}>{row}</tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div>
          <h2>Get results when finished</h2>
          <Button variant="success">Start</Button>
        </div>
      </div>
    </div>
  );
}
