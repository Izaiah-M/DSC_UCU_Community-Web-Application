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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={setName}
          placeholder="Full Names"
          required
          autoComplete="name"
        />
        <input
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="075XXXXXXX"
          pattern="^(?:\+256\s\d{9}|\d{10})$"
          autoComplete="tel"
          required
        />

        <input
          type="text"
          value={email}
          onChange={setEmail}
          placeholder="example@mail.com"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          autoComplete="email"
          required
        />

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

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};
