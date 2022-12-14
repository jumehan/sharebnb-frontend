import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./PropertyCard.css";

/** Property Card component
 * renders details about a property, link to property details page
 *
 * Props:
 * - property: {id, title, address, description, ownerUsername, key}
 *
 * State:
 * - none
 *
 * App -> RouteList -> CompanyList -> PropertyCard
 */

function PropertyCard({ property }) {

  const { id, title, address, key } = property;
  let imgSrc = key ? key : "../no-photo.jpeg";

  return (
    <NavLink to={`/properties/${id}`} >
      <Card
        className="Card mb-4"
        style={{
          width: '18rem',
          height: '16rem',
          border: '0px',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <div style={{
          width: '18rem', height: '150px', backgroundImage: `url(${imgSrc})`,
          backgroundSize: '18rem', backgroundRepeat: 'no-repeat'
        }}></div>

        {/* <img
          src={imgSrc}
          alt={`${title}`}
          style={{
            maxHeight: "150px",
            width: "auto",
          }}
        /> */}
        <CardBody>
          <CardTitle style={{color: 'grey'}} tag="h5">{title}</CardTitle>
          <CardSubtitle>{address}</CardSubtitle>
        </CardBody>
      </Card>
    </NavLink>
  );
}

export default PropertyCard;