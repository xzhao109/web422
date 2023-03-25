import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import { Container, Row, Col, Card } from "react-bootstrap";
import ArtworkCard from "@/components/ArtworkCard";

export default function Favourites() {
  const [favouritesList] = useAtom(favouritesAtom);
  console.log("Favourites list:", favouritesList);

  return (
    <Container>
      {favouritesList.length == 0 ? (
        <Card style={{ marginTop: "25px" }}>
          <Card.Body>
            <h4>Nothing Here</h4>
            Try adding some new artwork to the list.
          </Card.Body>
        </Card>
      ) : (
        <Row>
          {favouritesList.map((objectID) => (
            <Col xs={12} md={6} lg={4} key={objectID}>
              <ArtworkCard objectID={objectID} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
