import React, { useState } from 'react';

const EmployeeSalaryManagement = () => {
  
  const [salaries, setSalaries] = useState([]);

  const addSalary = (employeeId, amount) => {
    const newSalary = {
      id: salaries.length + 1,
      employeeId,
      amount
    };
    setSalaries([...salaries, newSalary]);
  };

  return (
    <div>
      <h1>Salary Management System</h1>
      <SalaryForm onSubmit={addSalary} />
      <SalaryList salaries={salaries} />
    </div>
  );
};

const SalaryForm = ({ onSubmit }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employeeId, amount);
    setEmployeeId('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee ID:
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button type="submit">Add Salary</button>
    </form>
  );
};

const SalaryList = ({ salaries }) => {
  return (
    <div>
      
      <h2>Salaries</h2>
      <ul>
        {salaries.map(salary => (
          <li key={salary.id}>
            <div>
              <strong>Employee ID:</strong> {salary.employeeId}
            </div>
            <div>
              <strong>Amount:</strong> {salary.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeSalaryManagement;





