import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { useDispatch } from "react-redux";
import { addFavourite } from "../redux/reducers/favouritesSlice";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
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
  const handleAddToFavorites = (companyName) => {
    dispatch(addFavourite(companyName));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Row
              key={jobData._id}
              className="mx-0 mt-3 p-3"
              style={{ border: "1px solid #00000033", borderRadius: 4 }}
            >
              <Col xs={3}>
                <a
                  href={`/${jobData.company_name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {jobData.company_name}
                </a>
              </Col>
              <Col xs={6}>
                <a href={jobData.url} target="_blank" rel="noreferrer">
                  {jobData.title}
                </a>
              </Col>
              <Col xs={3}>
                <Button
                  variant="primary"
                  onClick={() => handleAddToFavorites(jobData.company_name)}
                >
                  Add to Favourites
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
