// App.jsx

import React from "react";

// Student Component
function Student(props) {
  return (
    <div
      style={{
        border: "2px solid #333",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px",
        backgroundColor: "#f4f4f4",
        width: "300px"
      }}
    >
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial",
        padding: "20px"
      }}
    >
      <h1>Experiment 7: React Components using JSX and Props</h1>

      {/* Using Student Component Multiple Times */}
      <Student name="Rahul Sharma" course="B.Tech CSE" marks="89" />
      <Student name="Anita Verma" course="BCA" marks="92" />
      <Student name="Nikhil Dubey" course="B.Tech IT" marks="95" />
    </div>
  );
}

export default App;