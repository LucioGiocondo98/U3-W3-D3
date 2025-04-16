import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite } from "../redux/reducers/favouritesSlice";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddToFavourites = () => {
    dispatch(addFavourite(data.company_name));
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Button onClick={handleAddToFavourites}>Add to Favourites</Button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
