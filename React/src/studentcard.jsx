function StudentCard(props) {
    return (
        <div>
            <h2>Student Card Info</h2>
            <h3>Name: {props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}

export default StudentCard;