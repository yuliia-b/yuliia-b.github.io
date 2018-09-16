import React from 'react';
import UserAvatar from './UserAvatar';

class UserInfoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.name,
            company: props.company,
            location: props.location,
            bio: props.bio
        }
    }

    changeName = ({ target }) => this.setState({
        user: target.value,
    })

    changeCompany = ({ target }) => this.setState({
        company: target.value,
    })

    changeLocation = ({ target }) => this.setState({
        location: target.value,
    })

    changeBio = ({ target }) => this.setState({
        bio: target.value,
    })

    handleSubmit(event) {
        const { onChange, toggleView } = this.props;

        event.preventDefault();

        if (typeof onChange !== 'function') return;

        onChange(this.state);
        toggleView();
      }

    render() {
        const { name, company, location, bio } = this.state;
        const { toggleView, login, avatar_url } = this.props;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-wrap">
                    <div className="form__user-info">
                        <UserAvatar
                            avatarUrl={avatar_url}
                        />
                        <div className="user-info__login">
                            {login}
                        </div>
                    </div>
                    <div className="form__fields">
                        <div className="form__field">
                            <label>
                                <span>User name:</span>
                                <input
                                    type="text"
                                    className="form-name"
                                    placeholder="User name"
                                    value={name}
                                    onChange={this.changeName}
                                />
                            </label>
                        </div>
                        <div className="form__field">
                            <label>
                                <span>Company:</span>
                                <input
                                    type="text"
                                    className="form-company"
                                    placeholder="Company"
                                    value={company}
                                    onChange={this.changeCompany}
                                />
                            </label>
                        </div>
                        <div className="form__field">
                            <label>
                                <span>Location:</span>
                                <input
                                    type="text"
                                    className="form-location"
                                    placeholder="Location"
                                    value={location}
                                    onChange={this.changeLocation}
                                />
                            </label>
                        </div>
                        <div className="form__field">
                            <label>
                                <span>Bio:</span>
                                <textarea
                                    rows="10"
                                    cols="10"
                                    className="form-name"
                                    placeholder="Location"
                                    value={bio}
                                    onChange={this.changeBio}
                                />
                            </label>
                        </div>
                        <div className="form__field">
                            <button
                                type="reset"
                                onClick={toggleView}
                                className="btn btn-danger"
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                                Save
                            </button>
                        </div>
                    </div>
                </div>    
            </form> 
        )
    }
}

export default UserInfoForm;