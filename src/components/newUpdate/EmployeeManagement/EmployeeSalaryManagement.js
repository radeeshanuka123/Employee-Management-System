/*import React, { useState } from 'react';
import axios from 'axios';

const EmployeeSalaryManagement = () => {
    const [empId, setEmpId] = useState('');
    const [baseSalary, setBaseSalary] = useState('');
    const [overtimeHours, setOvertimeHours] = useState('');
    const [overtimeRate, setOvertimeRate] = useState('');
    const [leaveDays, setLeaveDays] = useState('');
    const [totalSalary, setTotalSalary] = useState(0);

    const calculateTotalSalary = () => {
        const base = parseFloat(baseSalary);
        const overtime = parseFloat(overtimeHours) * parseFloat(overtimeRate);
        const leave = parseFloat(leaveDays) * base / 30;
        return base + overtime - leave;
    };

    const handleCalculate = () => {
        const total = calculateTotalSalary();
        setTotalSalary(total);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/employee/update-salary', {
                empId,
                totalSalary: calculateTotalSalary()
            });

            alert('Salary updated successfully');
        } catch (error) {
            console.error('Failed to update salary:', error);
            alert('Failed to update salary');
        }
    };

    return (
        <div>
            <h1>Update Salary</h1>
            <form onSubmit={handleSubmit}>
                <label>Employee ID:</label>
                <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value)} />
                <br />
                <label>Base Salary:</label>
                <input type="number" value={baseSalary} onChange={(e) => setBaseSalary(e.target.value)} />
                <br />
                <label>Overtime Hours:</label>
                <input type="number" value={overtimeHours} onChange={(e) => setOvertimeHours(e.target.value)} />
                <br />
                <label>Overtime Rate:</label>
                <input type="number" value={overtimeRate} onChange={(e) => setOvertimeRate(e.target.value)} />
                <br />
                <label>Leave Days:</label>
                <input type="number" value={leaveDays} onChange={(e) => setLeaveDays(e.target.value)} />
                <br />
                <button type="button" onClick={handleCalculate}>Calculate Total Salary</button>
                <br />
                <label>Total Salary:</label>
                <span>{totalSalary}</span>
                <br />
                <button type="submit">Update Salary</button>
            </form>
        </div>
    );
};

export default EmployeeSalaryManagement;*/


import React, { useState } from 'react';
import axios from 'axios';

import './css/EmployeeSalary.css';

const EmployeeSalaryManagement = () => {
    const [empId, setEmpId] = useState('');
    const [baseSalary, setBaseSalary] = useState('');
    const [overtimeHours, setOvertimeHours] = useState('');
    const [overtimeRate, setOvertimeRate] = useState('');
    const [leaveDays, setLeaveDays] = useState('');
    const [totalSalary, setTotalSalary] = useState(0);
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');

    const calculateTotalSalary = () => {
        const base = parseFloat(baseSalary);
        const overtime = parseFloat(overtimeHours) * parseFloat(overtimeRate);
        const leave = parseFloat(leaveDays) * base / 30;
        return (base + overtime - leave).toFixed(2);
    };

    const handleCalculate = () => {
        const total = calculateTotalSalary();
        setTotalSalary(total);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/employee/update-salary', {
              empId,
              totalSalary: calculateTotalSalary(),
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 1, // Adding 1 because getMonth() returns zero-based month index
            });

            alert('Salary updated successfully');
        } catch (error) {
            console.error('Failed to update salary:', error);
            alert('Failed to update salary');
        }
    };

    return (
        <div className="slary-container">
            <h1 className="salary-heading1">Update Salary</h1>
            <form onSubmit={handleSubmit} className="salary-form">
                <label className="salary-label">Employee ID:</label>
                <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value) } className="salary-input" />
                <br />
                <label className="salary-label">Base Salary:</label>
                <input type="number" value={baseSalary} onChange={(e) => setBaseSalary(e.target.value)} className="salary-input" />
                <br />
                <label className='salary-label'>Year</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} className="salary-input"/>
                <br />
                <label className='salary-label'>Month</label>
                <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} className="salary-input"/>
                <br />
                <label className='salary-label'>Overtime Hours:</label>
                <input type="number" value={overtimeHours} onChange={(e) => setOvertimeHours(e.target.value)} className="salary-input"/>
                <br />
                <label className='salary-label'>Overtime Rate:</label>
                <input type="number" value={overtimeRate} onChange={(e) => setOvertimeRate(e.target.value)} className="salary-input"/>
                <br />
                <label className='salary-label'>Leave Days:</label>
                <input type="number" value={leaveDays} onChange={(e) => setLeaveDays(e.target.value)} className="salary-input"/>
                <br />
                <button type="button" onClick={handleCalculate} className="salary-btn">Calculate Total Salary</button>
                <br />
                <label className='salary-label'>Total Salary:</label>
                <span className="salary-span">{totalSalary}</span>
                <br />
                <button type="submit" className="salary-btn">Update Salary</button>
            </form>
        </div>
    );
};

export default EmployeeSalaryManagement;

