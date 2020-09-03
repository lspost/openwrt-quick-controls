import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { groupActions } from '../actions';
import GroupCard from '../components/GroupCard';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getGroups();
  }

  renderGroups() {
    return this.props.groups.map(group => (
      <GroupCard id={group._id} name={group.name} devices={group.devices} />
    ));
  }
  render() {
    return (
      <div>
        {this.renderGroups()}
        <Link to="/group/edit" className="btn">
          Add Group
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ groups }) => ({ groups });

export default connect(mapStateToProps, groupActions)(Dashboard);
