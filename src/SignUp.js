import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ user, setUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (firstName && lastName && username && password) {
      setUser({
        firstName,
        lastName,
        username,
        password,
      });
      navigate("/login");
    } else {
      setError("You must fill all the fields!");
    }
  }

  return (
    <div>
      <h1>Fill the information correctly to sign up</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>First Name: </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
