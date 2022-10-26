import UserContext from "./auth/UserContext";
import { useContext } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

/** Home  page for app
 *
 * Context: currentUser
 *
 * App -> RouteList -> Homepage
 */
function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <section
      className="Homepage"
      style={{
        position: "relative",
        width: "68vw",
        height: "20vh",
        minHeight: "425px",
      }}
    >
      <div
        className="Homepage-text"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,.33)",
          color: "rgba(0,0,0,.8)",
          position: "absolute",
          width: "100%",
          height: "55%",
          top: "44%",
          left: "20%",
          padding: "1rem",
        }}
      >
        <h1>ShareB&B</h1>
        <h3>Share your extra space. Get paid.</h3>

        <p style= {{color:"lightgrey"}}>
          <i>
            Sharebnb is a space sharing app that matches people who have space
            to share with people looking for a place to stay.
          </i>
        </p>

        {currentUser ? (
          <p>
            {" "}
            Welcome back, <b>{currentUser.username}</b>{" "}
          </p>
        ) : (
          <>
            <Link to="/login">
              <Button color="primary">Log in</Button>
            </Link>
            &nbsp; &nbsp;
            <Link to="/signup">
              <Button color="primary">Sign up</Button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default Homepage;
