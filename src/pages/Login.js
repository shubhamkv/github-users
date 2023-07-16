import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <nav
        style={{
          width: "var(--fluid-width)",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          color: "hsl(185, 84%, 25%)",
        }}
      >
        <h1>gitpedia </h1>
      </nav>
      <br />
      <div
        style={{
          width: "var(--fluid-width)",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
        }}
      >
        <div>
          <h2>
            Search <span style={{ color: "hsl(185, 77%, 34%)" }}>github</span>{" "}
            users
          </h2>
          <br />
          <h4>
            register to know the statistics of your favourite developer and top
            contributor across the world
          </h4>
          <br />
          <button className="btn" onClick={loginWithRedirect}>
            login / sign up
          </button>
        </div>
        <img
          src={loginImg}
          alt="github users"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  //place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
