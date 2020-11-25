import { Fragment } from "react";
import { useRouter } from "next/router";

function PageLogin() {
  const router = useRouter();

  function handleLogin(event) {
    event.preventDefault();
    console.log("Form validation before routing");
    router.push("/dashboard");
  }

  return (
    <Fragment>
      <input placeholder="User Name" />
      <input placeholder="Password" type="password" />
      <button onClick={handleLogin} type="button">
        Log In
      </button>
    </Fragment>
  );
}

export default PageLogin;
