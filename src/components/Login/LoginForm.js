import { NavLink } from "react-router-dom";

export const LoginForm = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  // TODO: get the user info when they log in, so find a way to connect it

  return (
    <div className="form-card">
      <div>
        <h2>Log In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            value={email}
            onChange={setEmail}
            placeholder="example@mail.com"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            autoComplete="email"
            required
          />
        </div>
        <div className="row">
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={setPassword}
            placeholder="password"
            minLength="8"
            maxLength="15"
            required
          />
        </div>
        <div className="row">
          <input type="submit" value="Log In" className="btn" />
        </div>
      </form>
      <div>
        <p>
          Need an account? <NavLink to="/sign-up">Sign Up!</NavLink>
        </p>
      </div>
    </div>
  );
};
