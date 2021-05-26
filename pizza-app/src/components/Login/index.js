import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../../assets/scss/login.scss";
import { loginForCRUD } from "../../redux/actions/userActions";
function Login() {
  const loginUser = {
    email: "",
    password: "",
  };

  const activeUser = {
    name: "Muhammed",
    surname: "Mikayilov",
    age: 21,
    role: "Admin",
    account: {
      email: "muha@code.az",
      password: "123456",
    },
  };

  const [userActive] = React.useState(activeUser);
  const [errorMessage, setErrorMessage] = React.useState(false);

  const dispatch = useDispatch();

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const history = useHistory();

  const handleLoginEvent = React.useCallback(() => {
    loginForCRUD(dispatch, userActive);
    if (userActive) {
      history.push("/dashboard");
    }
  }, [history, userActive, dispatch]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      localStorage.setItem("my-pizza-app", JSON.stringify(userActive));
      if (
        emailRef.current.value === activeUser.account.email &&
        passwordRef.current.value === activeUser.account.password
      ) {
        handleLoginEvent();
      } else {
        setErrorMessage(true);
      }
    },
    [
      activeUser.account.email,
      activeUser.account.password,
      handleLoginEvent,
      userActive,
    ]
  );

  return (
    <section id="login">
      <div className="page">
        <div className="container">
          <div className="left">
            <Link to="/" className="btn btn-success">
              Back to Main Page
            </Link>
            <div className="login">Login</div>
            <div className="eula">
              Welcome to Web Site of the{" "}
              <span className="text-success">Pizza Store</span>{" "}
            </div>
          </div>
          <div className="right">
            <form className="form" onSubmit={handleSubmit}>
              {errorMessage && (
                <span className="text-danger">Email or Password is wrong</span>
              )}

              <label htmlFor="email">muha@code.az</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                autoComplete="username"
                ref={emailRef}
                defaultValue={loginUser.email}
                onChange={(e) => {
                  loginUser.email = e.target.value;
                  setErrorMessage(false);
                }}
              />
              <label htmlFor="password">123456</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                autoComplete="current-password"
                ref={passwordRef}
                defaultValue={loginUser.password}
                onChange={(e) => {
                  loginUser.password = e.target.value;
                  setErrorMessage(false);
                }}
              />
              <button type="submit" className="btn btn-info submitBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
