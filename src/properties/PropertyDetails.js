import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShareBnB from "../api/api";
import { Container, Row, Col } from "reactstrap";
import SendMessageForm from "../messages/SendMessageForm";
import BookingForm from "./BookingForm";

/** PropertyDetails: id, description and list of all jobs of one Property
 *
 * Props:
 * - book fn()
 * - sendMsg fn()
 *
 * State:
 * - Property = {id, title, address, description, ownerUsername, images}
 *
 *
 * App -> PropertyDetails -> SendMessageForm
 */

function PropertyDetails({ book, sendMsg }) {
  const [property, setProperty] = useState({
    data: null,
    isLoading: true,
  });

  const { id } = useParams();

  /* calls api to get a property by id */

  useEffect(
    function fetchPropertyDetail() {
      async function fetchProperty() {
        const result = await ShareBnB.getProperty(id);
        setProperty({
          data: result,
          isLoading: false,
        });
      }
      fetchProperty();
    },
    [id]
  );

  if (property.isLoading) return <h1>LOADING...</h1>;

  return (
    <Container>
      <Row
        xs="1"
        sm="1"
        md="2"
        lg="2"
        xxl="2"
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        <Col
          style={{
            margin: "auto",
            marginTop: "2rem",
          }}
        >
          <h2> {property.data.title}</h2>

          <img
            style={{
              width: "444px",
              marginBottom: "2rem",
              borderRadius: "1rem",
            }}
            src={
              property.data.images[0]
                ? property.data.images[0].key
                : "../no-photo.jpeg"
            }
            alt={property.data.title}
          />
          <h5>About this property</h5>
          <p> {property.data.description}</p>
          <p>
            <i>Address: {property.data.address}</i>
          </p>
          <hr></hr>
          <small>Listed by: {property.data.ownerUsername}</small>
        </Col>
        <Col style={{}}>
          <BookingForm propertyId={property.data.id} />
          <SendMessageForm
            sendMsg={sendMsg}
            toUsername={property.data.ownerUsername}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default PropertyDetails;
