import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContextProvider";

const Login = () => {
    const { actions } = useAppContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event, changeFunction) => {
        changeFunction(event.target.value);
    };

    const handleSubmit = () => {
        actions.handleSignIn({ email, password });
    };

    return (
        <section className="form page">
            <article>
                <h1>Log In</h1>
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
                <div className="button-group">
                    <Link to="/sign-up">
                        <button>Sign Up</button>
                    </Link>
                    <button className="primary" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </article>
        </section>
    );
};

export default Login;
