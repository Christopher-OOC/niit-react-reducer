import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (user?.username === username && user?.password === password) {
      navigate("/app");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div>
      <h1>Provide your usename and password to login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <div>
        <Link to="/signup">Are you new here? create an account!</Link>
      </div>
    </div>
  );
}
