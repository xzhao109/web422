import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import useSWR from "swr";
import Error from "next/error";

// { objectID } : pass only the objectID value instead of the entire object
function ArtworkCard({ objectID }) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) return <Error statusCode={404} />;
  if (!data) return null;

  const { primaryImageSmall, title, objectDate, classification, medium } = data;

  const imageUrl = primaryImageSmall
    ? primaryImageSmall
    : "https://via.placeholder.com/375x375.png?text=[+Not+Available+]";

  return (
    <Card style={{ width: "18rm" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title || "N/A"}</Card.Title>
        <Card.Text>
          <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
          {objectDate || "N/A"} <br />
          <span style={{ fontWeight: "bold" }}>Classification:</span>{" "}
          {classification || "N/A"} <br />
          <span style={{ fontWeight: "bold" }}>Medium:</span> {medium || "N/A"}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passhref="true">
          <Button variant={"outline-dark"}>
            <span style={{ fontWeight: "bold" }}>ID: </span> {objectID}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ArtworkCard;
