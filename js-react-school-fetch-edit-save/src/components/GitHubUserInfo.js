import React from 'react';
import GitHubUserProfile from './GitHubUserProfile';
import UserInfoForm from './UserInfoForm';
import { userFetchProfile, updateUserInfo } from './user';

const BI_MODE_VIEW = 'view';
const BI_MODE_EDIT = 'edit';
const BI_MODE_LOAD = 'load';

const isView = mode => (
  mode === BI_MODE_VIEW
);

const isEdit = mode => (
  mode === BI_MODE_EDIT
);

const isLoad = mode => (
  mode === BI_MODE_LOAD
);

class GitHubUserInfo extends React.Component {
    state = {
      mode: BI_MODE_LOAD,
      book: null
    }
  
    toggleView = () => this.setState(
      ({ mode }) => ({
        mode: mode === BI_MODE_VIEW
          ? BI_MODE_EDIT
          : BI_MODE_VIEW
      })
    );
  
    handleUserInfoChange = data => {
      this.setState(
        updateUserInfo(data)
      );
    }
  
    loadUserInfo() {
      const username = this.props.username;
      
      userFetchProfile(username)
        .then(this.handleUserInfoChange)
        .then(
          () => this.setState({
            mode: BI_MODE_VIEW
          })
        )
    }
  
    componentDidMount() {
      this.loadUserInfo();
    }
  
    render() {
      const { user, mode } = this.state;
      const handlers = {
        toggleView: this.toggleView,
        onChange: this.handleUserInfoChange,
      }
      
      return (
        isView(mode) ? <GitHubUserProfile {...user} {...handlers} /> :
        isEdit(mode) ? <UserInfoForm {...user} {...handlers} /> :
        isLoad(mode) ? 'Loading ...' :
        null
      );
    }
  }
  
  export default GitHubUserInfo;