import useSWR from "swr";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import Error from "next/error";

function ArtworkCardDetail(objectID) {
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );

  if (error) return <Error statusCode={404} />;
  if (!data) return null;

  const {
    primaryImage,
    title,
    objectDate,
    classification,
    medium,
    artistDisplayName,
    creditLine,
    dimensions,
    artistWikidata_URL,
  } = data;

  const imageUrl = primaryImage
    ? primaryImage
    : "https://via.placeholder.com/375x375.png?text=[+Not+Available+]";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>Title: {title || "N/A"}</Card.Title>
        <Card.Text>
          <span>{objectDate || "N/A"}</span>
          <span>{classification || "N/A"}</span>
          {medium && (
            <>
              <span>Medium: {medium}</span>
              <br />
              <br />
            </>
          )}
          <span>Artist: {artistDisplayName || "N/A"}</span>
          <span>Credit Line: {creditLine || "N/A"}</span>
          <span>Dimensions: {dimensions || "N/A"}</span>
          {artistDisplayName && artistWikidata_URL && (
            <>
              <br />
              <a href={artistWikidata_URL} target="_blank" rel="noreferrer">
                Wiki
              </a>
            </>
          )}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passhref="true">
          <Button variant="primary">{objectID}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ArtworkCardDetail;
