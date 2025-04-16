import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../redux/reducers/favouritesSlice";
import { Container, Row, Col, Button } from "react-bootstrap";

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.favourites);

  const dispatch = useDispatch();

  const handleRemoveFromFavourites = (companyName) => {
    dispatch(removeFavourite(companyName));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Favourites</h1>
          {favourites.length > 0 ? (
            favourites.map((companyName) => (
              <Row key={companyName} className="my-2">
                <Col xs={8}>
                  <Button
                    variant="link"
                    onClick={() => handleRemoveFromFavourites(companyName)}
                  >
                    {companyName}
                  </Button>
                </Col>
              </Row>
            ))
          ) : (
            <p>No favourites added yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;
