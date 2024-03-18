import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { handleChange, handleSubmit, formValues } = useAuth() || {};

  const { username, password } = formValues || { username: "", password: "" };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          value={username}
          name="username"
          type="text"
          placeholder="your user name"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={password}
          name="password"
          type="password"
          placeholder="enter your password"
          required
        />
      </div>

      <button type="submit">Login</button>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </form>
  );
}

export default LoginPage;
