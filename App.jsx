import React, { useState } from "react";
import "./App.css";
function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const employees = [
    {
      id: 1,
      name: "sachin",
      email: "sachin@gmail.com",
      age: 22,
      city: "tirupur",
      role: "Full stack Developer"
    },
    {
      id: 2,
      name: "venky",
      email: "venky@gmail.com",
      age: 24,
      city: "Coimbatore",
      role: "UI Designer"
    },
    {
      id: 3,
      name: "ajith",
      email: "ajith@gmail.com",
      age: 25,
      city: "Tiruppur",
      role: "Java Developer"
    },
    {
      id: 4,
      name: "dhanush",
      email: "dhanush@gmail.com",
      age: 22,
      city: "erode",
      role: "Software Tester"
    },
    {
      id: 5,
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 25,
      city: "Salem",
      role: "Full Stack Developer"
    }
  ];

return (
  <div className="container">
    {isLoggedIn ? (
      <div className="home">
        <nav>
          <h2>Employee Dashboard</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </nav>
        <h1>Welcome Home!</h1>
        <p>Employee Management Dashboard</p>
        <h2 className="heading">Employee Details</h2>
        <div className="employee-container">
          {employees.map((employee) => (
            <div className="card" key={employee.id}>
              <h2>{employee.name}</h2>
              <p><b>Email:</b> {employee.email}</p>
              <p><b>Age:</b> {employee.age}</p>
              <p><b>City:</b> {employee.city}</p>
              <p><b>Role:</b> {employee.role}</p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="login">
        <h1>Welcome Back!</h1>
        <p>Please login to continue</p>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    )}
  </div>
);
}
export default App;

  