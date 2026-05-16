import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <StudentCard
        name="Alice"
        age={22}
        course="Computer Science"
      />
    </div>
  );
}

export default App;