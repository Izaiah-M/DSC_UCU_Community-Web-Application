import "./SignUpForm.css";

export const SignUpForm = ({
  handleSubmit,
  name,
  email,
  setEmail,
  setName,
  phone,
  setPhone,
  password,
  setPassword,
}) => {
  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            value={name}
            onChange={setName}
            placeholder="Full Names"
            required
            autoComplete="name"
          />
        </div>
        <div className="row">
          <input
            type="tel"
            value={phone}
            onChange={setPhone}
            placeholder="075XXXXXXX"
            pattern="^(?:\+256\s\d{9}|\d{10})$"
            autoComplete="tel"
            required
          />
        </div>
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
          <input type="submit" value="Sign Up" className="btn" />
        </div>
      </form>
    </div>
  );
};
