import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "./action";

// All'interno di MainSearch.js
const MainSearch = () => {
  // State locale per la query
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleAddFavorite = (companyName) => {
    dispatch(addFavorite(companyName));
  };

  const handleRemoveFavorite = (companyName) => {
    dispatch(removeFavorite(companyName));
  };

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">

          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job
                key={jobData._id}
                data={jobData}
                handleAddFavorite={handleAddFavorite} // Assicurati di passare la funzione
                handleRemoveFavorite={handleRemoveFavorite} // Assicurati di passare la funzione
                isFavorite={favorites.includes(jobData.company_name)}
              />
            ))}
          </Col>




        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
