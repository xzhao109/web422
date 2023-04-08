import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import useSWR from "swr";
import { Card, Button } from "react-bootstrap";
import Error from "next/error";
import { useState, useEffect } from "react";
import { addToFavourites, removeFromFavourites } from "@/lib/userData";

function ArtworkCardDetail({ objectID }) {
  const { data, error } = useSWR(
    objectID
      ? `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
      : null
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

  const imageUrl = data?.primaryImage;

  // Adding "Favourites" Functionality
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom);
  const [showAdded, setShowAdded] = useState(false);

  useEffect(() => {
    setShowAdded(favouritesList?.includes(objectID));
  }, [favouritesList]);

  async function favouritesClicked() {
    if (showAdded) {
      setFavouritesList(await removeFromFavourites(props.objectID));
    } else {
      setFavouritesList(await addToFavourites(props.objectID));
    }
  }

  return (
    <Card style={{ width: "80rem", marginTop: "25px" }}>
      {imageUrl && <Card.Img variant="top" src={imageUrl} />}
      <Card.Body>
        <Card.Title>{title || "N/A"}</Card.Title>
        <Card.Text>
          <span style={{ fontWeight: "bold" }}>Date:</span>{" "}
          {objectDate || "N/A"} <br />
          <span style={{ fontWeight: "bold" }}>Classification:</span>{" "}
          {classification || "N/A"} <br />
          <span style={{ fontWeight: "bold" }}>Medium:</span> {medium || "N/A"}
          <br />
          <br />
          {artistDisplayName && artistWikidata_URL && (
            <>
              <span style={{ fontWeight: "bold" }}>Artist: </span>
              {artistDisplayName}
              {" ( "}
              <a
                className="wiki-link"
                href={artistWikidata_URL}
                target="_blank"
                rel="noreferrer"
              >
                wiki
              </a>
              {" )"}
            </>
          )}
          <br />
          <span style={{ fontWeight: "bold" }}>Credit Line:</span>{" "}
          {creditLine || "N/A"}
          <br />
          <span style={{ fontWeight: "bold" }}>Dimensions: </span>
          {dimensions || "N/A"}
        </Card.Text>
        <Button
          variant={showAdded ? "dark" : "outline-dark"}
          onClick={favouritesClicked}
        >
          {showAdded ? "+ Favourite (added)" : "+ Favourite"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArtworkCardDetail;
