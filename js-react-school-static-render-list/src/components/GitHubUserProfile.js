import React from 'react';

const GitHubUserProfile = ({avatarUrl, login, htmlUrl, siteAdmin}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10">
                <div className="user-profile">
                    <div className="user-profile__avatar">
                        <img src={avatarUrl} alt="User avatar"/>
                    </div>
                    <div className="user-profile__info">
                        <div className="user-profile__main-info">
                            <div className="main-info__name">{login}</div>
                            { siteAdmin &&
                                <div className="main-info__admin">Admin</div>
                            }
                        </div>
                        <div className="user-profile__link">
                            <a href={htmlUrl} target="_blank">{htmlUrl}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default GitHubUserProfile;
