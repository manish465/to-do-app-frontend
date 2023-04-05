import { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";
import { Link } from "react-router-dom";

const Signup = () => {
    const { actions } = useAppContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");

    const handleChange = (event, changeFunction) => {
        changeFunction(event.target.value);
    };

    const handleSubmit = () => {
        if (password === password1) {
            actions.handleSignUp({ firstName, lastName, email, password });
        } else actions.showNotification("password should match");
    };

    return (
        <section className="form">
            <article>
                <h1>Sign Up</h1>
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
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => handleChange(event, setPassword)}
                />
                <input
                    type="password"
                    name="password1"
                    id="password1"
                    placeholder="Enter password again"
                    value={password1}
                    onChange={(event) => handleChange(event, setPassword1)}
                />
                <div className="button-group">
                    <button className="primary" onClick={handleSubmit}>
                        Sign Up
                    </button>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </article>
        </section>
    );
};

export default Signup;
