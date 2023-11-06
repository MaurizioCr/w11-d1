// Favourites.js
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";

const Favourites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favorite Companies</h1>
          {favorites.map((companyName) => (
            <Job key={companyName} data={{ company_name: companyName }} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
