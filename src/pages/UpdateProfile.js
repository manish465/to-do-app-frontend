import { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";

const UpdateProfile = () => {
    const { state, actions } = useAppContext();

    const [firstName, setFirstName] = useState(state.userFirstName);
    const [lastName, setLastName] = useState(state.userLastName);
    const [email, setEmail] = useState(state.userEmail);

    const handleChange = (event, changeFunction) => {
        changeFunction(event.target.value);
    };

    const handleSubmit = () => {
        actions.handleChangeUserInfo({ firstName, lastName, email });
    };

    return (
        <section className="form page">
            <article>
                <h1>Update Profile</h1>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(event) => handleChange(event, setFirstName)}
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(event) => handleChange(event, setLastName)}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => handleChange(event, setEmail)}
                />
                <div className="button-group">
                    <button onClick={handleSubmit}>Update Profile</button>
                </div>
            </article>
        </section>
    );
};

export default UpdateProfile;
