import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const employeeData = [
    {id: 1, name: "Chandler Bing", phone: "305-917-1301", profession: "IT Manager"},
    {id: 2, name: "Ross Geller", phone: "210-684-8953", profession: "Paleontologist"},
    {id: 3, name: "Rachel Green", phone: "765-338-0312", profession: "Writer"}
  ]

  const [newEmployeeName, setNewEmployeeName] = useState('')
  const [newEmployeePhone, setNewEmployeePhone] = useState('')
  const [newEmployeeProfession, setNewEmployeeProfession] = useState('')
  const [employees, setEmployees] = useState(employeeData)

  function handleSubmit(e) {
    e.preventDefault()

    if (newEmployeeName) {
      setEmployees(currentEmployees => {
        return [
          ...currentEmployees,
          { id: employees.length+1, name: newEmployeeName, phone: newEmployeePhone, profession: newEmployeeProfession }
        ]
      })
    }
    setNewEmployeeName('');
    setNewEmployeePhone('');
    setNewEmployeeProfession('');
  }

  return (
    <div>
      <nav className="navbar bg-success-subtle">
        <div className="container-fluid">
          <div className="navbar-brand" style={{fontSize: "24px"}}>
            <img src="employee.png" alt="employee" width="32" height="32" className="d-inline-block align-text-top" />
            &nbsp;&nbsp;Employee Data
          </div>
        </div>
      </nav>

      <div className="container" style={{marginTop: "48px"}}>
        <div className="row">
          <div className="col">
            <input type="email" className="form-control" value={newEmployeeName} onChange={e => setNewEmployeeName(e.target.value)} placeholder="Name" />
          </div>
          <div className="col">
            <input type="email" className="form-control" value={newEmployeePhone} onChange={e => setNewEmployeePhone(e.target.value)} placeholder="Phone" />
          </div>
          <div className="col">
            <input type="email" className="form-control" value={newEmployeeProfession} onChange={e => setNewEmployeeProfession(e.target.value)} placeholder="Profession" />
          </div>
          <div className="col">
           <button onClick={handleSubmit} type="button" className="btn btn-success w-100">Send</button>
           </div>
        </div>
      </div>

      <div style={{margin: "60px"}}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Profession</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.profession}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
