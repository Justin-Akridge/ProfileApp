import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Stan the Man",
      role: "cigarette smoker",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-1933873.jpg&fm=jpg&_gl=1*zbl3wv*_ga*MTcyNzU5NjgxNy4xNjY2NTY2Mzc3*_ga_8JE65Q40S6*MTY2NjU3MDMzOS4yLjEuMTY2NjU3MDcyNy4wLjAuMA..",
    },
    {
      name: "ashley",
      role: "influencer",
      img: "https://images.pexels.com/photos/1982852/pexels-photo-1982852.jpeg?cs=srgb&dl=pexels-osmar-vasques-1982852.jpg&fm=jpg&_gl=1*8qnlk2*_ga*MTcyNzU5NjgxNy4xNjY2NTY2Mzc3*_ga_8JE65Q40S6*MTY2NjU3MDMzOS4yLjEuMTY2NjU3MDcxMC4wLjAuMA..",
    },
    {
      name: "Teddy",
      role: "model",
      img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?cs=srgb&dl=pexels-teddy-tavan-4890733.jpg&fm=jpg&_gl=1*13snagr*_ga*MTcyNzU5NjgxNy4xNjY2NTY2Mzc3*_ga_8JE65Q40S6*MTY2NjU3MDMzOS4yLjEuMTY2NjU3MDY5Ni4wLjAuMA..",
    },
    {
      name: "Italo",
      role: "artist",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg&_gl=1*1b57tui*_ga*MTcyNzU5NjgxNy4xNjY2NTY2Mzc3*_ga_8JE65Q40S6*MTY2NjU3MDMzOS4yLjAuMTY2NjU3MDMzOS4wLjAuMA..",
    },
    {
      name: "Jacob",
      role: "attorney",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?cs=srgb&dl=pexels-kevin-bidwell-2380794.jpg&fm=jpg&_gl=1*f665nx*_ga*MTcyNzU5NjgxNy4xNjY2NTY2Mzc3*_ga_8JE65Q40S6*MTY2NjU3MDMzOS4yLjEuMTY2NjU3MDc2My4wLjAuMA..",
    },
    {
      name: "Griffin",
      role: "gamer",
      img: "https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?cs=srgb&dl=pexels-gryffyn-m-5397723.jpg&fm=jpg&_gl=1*4ukkfv*_ga*MTcyNzU5NjgxNy4xNjY2NTY2Mzc3*_ga_8JE65Q40S6*MTY2NjU3MDMzOS4yLjAuMTY2NjU3MDMzOS4wLjAuMA..",
    },
  ]);
  const showEmployees = true; //false
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
