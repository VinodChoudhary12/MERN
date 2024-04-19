
import { useState } from "react";
import "./App.css";
import Student from "./components/Student";

function App() {
  const [stream, setStream] = useState("");
  const [students, setStudents] = useState(Student);
  const [newStudent, setNewStudent] = useState({
    roll: "",
    name: "",
    contact: "",
    branch: ""
  });

  const handleStreamClick = (selectedStream) => {
    setStream(selectedStream);
  };

  const handleRemoveClick = (index) => {

    if (window.confirm("Are You Sure?")) {
      const updatedStudents = [...students];
      updatedStudents.splice(index, 1);
      setStudents(updatedStudents);
    }

  };
  const handleAddStudent = () => {
    if (newStudent.roll && newStudent.name && newStudent.contact && newStudent.branch) {
      setStudents([...students, newStudent]);
      setNewStudent({ roll: "", name: "", contact: "", branch: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Student</h1>
      </div>
      <div className="container mt-4">
        <div className="row mt-3 ">
          <div className="col-md-6 ">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Roll Number"
              value={newStudent.roll}
              onChange={(e) => setNewStudent({ ...newStudent, roll: e.target.value })}
            />
          </div>
          <div className="col-md-6 ">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Name "
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 ">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Contact Number"
              value={newStudent.contact}
              // onChange={(e)=>setNewStudent({...newStudent,contact:e.target.value})
              onChange={(e) => setNewStudent({ ...newStudent, contact: e.target.value })}
            />
          </div>
          <div className="col-md-6 ">
            <select
              className="form-select"
              aria-label="Default select example"
              value={newStudent.branch}
              onChange={(e) => setNewStudent({ ...newStudent, branch: e.target.value })}
            >
              <option value="">All Streams</option>
              <option value="IT">IT</option>
              <option value="CS">CS</option>
              <option value="EC">EC</option>
              <option value="MECH">MECH</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-6 text-end mt-2 ">
          <button className="btn btn-success ml-2" onClick={() => { handleAddStudent() }}>
            ADD
          </button>
        </div>
        <div className="col-6 m-auto  ">
          <button className="btn btn-info m-2 px-4" onClick={() => handleStreamClick("IT")}>
            IT ({students.filter(data => data.branch === "IT").length})
          </button>
          <button className="btn btn-warning gap-3 m-2 px-4" onClick={() => handleStreamClick("CS")}>
            CS ({students.filter(data => data.branch === "CS").length})
          </button>
          <button className="btn btn-success gap-2 m-2 px-4" onClick={() => handleStreamClick("EC")}>
            EC ({students.filter(data => data.branch === "EC").length})
          </button>
          <button className="btn btn-secondary gap-2 m-2" onClick={() => handleStreamClick("MECH")}>
            MECH ({students.filter(data => data.branch === "MECH").length})
          </button>
          <button className="btn btn-success m-2 p-2" onClick={() => handleStreamClick("")}>
            Show All ({students.filter(data => data.branch).length})
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <table className="table ">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Stream</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((student) => !stream || student.branch === stream)
              .map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.roll}</td>
                  <td>{student.name}</td>
                  <td>{student.branch}</td>
                  <td>{student.contact}</td>
                  <td>
                    <button className="btn btn-outline-danger" onClick={() => handleRemoveClick(index)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;
