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
        width: "70vw",
        height: "25vh",
        minHeight: "400px",
      }}
    >
      <div
        className="Homepage-text"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,.1)",
          color: "rgba(0,0,0,.8)",
          position: "absolute",
          width: "100%",
          height: "50%",
          top: "50%",
          left: "20%",
          paddingTop: "2rem",
        }}
      >
        <h1>ShareB&B</h1>
        <h5>Search for outdoor spaces to rent!</h5>
        {currentUser ? (
          <p> Welcome back, <b>{currentUser.username}</b> </p>
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
