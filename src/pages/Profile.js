import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const Profile = () => {
    const { state, actions } = useAppContext();

    useEffect(() => {
        actions.handleGetUserInfo();
    }, []);

    return (
        <section className="form profile page">
            <article>
                <h1>Your Profile</h1>
                {state.userFirstName && state.userLastName ? (
                    <span className="info">
                        Name : {state.userFirstName + " " + state.userLastName}
                    </span>
                ) : (
                    <span className="loading">Loading...</span>
                )}
                {state.userEmail ? (
                    <span className="info">Email : {state.userEmail}</span>
                ) : (
                    <span className="loading">Loading...</span>
                )}
                <div className="button-group">
                    <Link to="/update-profile">
                        <button>Update Profile</button>
                    </Link>
                    <button
                        className="primary"
                        onClick={actions.handleUserDelete}
                    >
                        Delete Profile
                    </button>
                </div>
            </article>
        </section>
    );
};

export default Profile;
