import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to="/group/edit" className="btn">
        Add Group
      </Link>
    </div>
  );
};

export default Dashboard;
