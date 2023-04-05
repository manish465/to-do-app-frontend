import { useState } from "react";
import { useAppContext } from "../context/AppContextProvider";
import { actionType } from "../context/appReducer";

const Signup = () => {
    const { dispatch } = useAppContext();

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
            fetch(
                "https://to-do-app-node-server.onrender.com/api/v1/user/add-user",
                {
                    method: "POST",
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.message);
                    dispatch({
                        type: actionType.SHOW_NOTIFICATION,
                        payload: { message: data.message },
                    });
                })
                .catch((error) => {
                    dispatch({
                        type: actionType.SHOW_NOTIFICATION,
                        payload: error,
                    });
                });
        } else alert("password should match");
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
                    <button onClick={handleSubmit}>Sign Up</button>
                    <button>Login</button>
                </div>
            </article>
        </section>
    );
};

export default Signup;
