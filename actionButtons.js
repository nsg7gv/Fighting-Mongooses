import React from 'react';

const ActionButtons = ({ createJob, handleUpdate, handleDelete }) => (
  <>
    <button onClick={createJob} className="button">
      Create Job
    </button>
    <button onClick={handleUpdate} className="button">
      Update Job
    </button>
    <button onClick={handleDelete} className="button">
      Delete Job
    </button>
    <br /><br />
  </>
);

export default ActionButtons;