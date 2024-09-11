import React, { useState } from 'react';

const EmployeeLeaveManagement = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  const submitLeaveRequest = (startDate, endDate, reason) => {
    const newLeaveRequest = {
      id: leaveRequests.length + 1,
      startDate,
      endDate,
      reason,
      status: 'Pending'
    };
    setLeaveRequests([...leaveRequests, newLeaveRequest]);
  };

  const approveLeaveRequest = (id) => {
    const updatedLeaveRequests = leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'Approved' } : request
    );
    setLeaveRequests(updatedLeaveRequests);
  };

  const rejectLeaveRequest = (id) => {
    const updatedLeaveRequests = leaveRequests.map(request =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    );
    setLeaveRequests(updatedLeaveRequests);
  };

  return (
    <div>
      <h1>Leave Management System</h1>
      <LeaveRequestForm onSubmit={submitLeaveRequest} />
      <LeaveRequests
        requests={leaveRequests}
        onApprove={approveLeaveRequest}
        onReject={rejectLeaveRequest}
      />
    </div>
  );
};

const LeaveRequestForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(startDate, endDate, reason);
    setStartDate('');
    setEndDate('');
    setReason('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        Reason:
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const LeaveRequests = ({ requests, onApprove, onReject }) => {
  return (
    <div>
      <h2>Leave Requests</h2>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            <div>
              <strong>Start Date:</strong> {request.startDate}
            </div>
            <div>
              <strong>End Date:</strong> {request.endDate}
            </div>
            <div>
              <strong>Reason:</strong> {request.reason}
            </div>
            <div>
              <strong>Status:</strong> {request.status}
            </div>
            {request.status === 'Pending' && (
              <div>
                <button onClick={() => onApprove(request.id)}>Approve</button>
                <button onClick={() => onReject(request.id)}>Reject</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeLeaveManagement;