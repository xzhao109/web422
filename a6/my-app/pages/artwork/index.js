import validObjectIDList from "@/public/data/validObjectIDList.json";
import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Col, Pagination, Row, Card } from "react-bootstrap";
import ArtworkCard from "@/components/ArtworkCard";
import Error from "next/error";

const PER_PAGE = 12;

export default function Artwork() {
  const [artworkList, setArtworkList] = React.useState();
  const [page, setPage] = React.useState(1);
  const router = useRouter();
  let finalQuery = router.asPath.split("?")[1];
  const { data, error } = useSWR(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`
  );

  React.useEffect(() => {
    if (data) {
      const results = [];
      // Solving the invalid objectID problem
      let filteredResults = validObjectIDList.objectIDs.filter((x) =>
        data.objectIDs?.includes(x)
      );
      for (let i = 0; i < filteredResults.length; i += PER_PAGE) {
        const chunk = filteredResults.slice(i, i + PER_PAGE);
        results.push(chunk);
      }
      setArtworkList(results);
      setPage(1);
    }
  }, [data]);

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page < artworkList.length) {
      setPage(page + 1);
    }
  }

  if (error) return <Error statusCode={404} />;
  if (!artworkList) return null;

  return (
    <>
      <Row className="gy-4" style={{ marginTop: "5px" }}>
        {artworkList.length > 0 ? (
          artworkList[page - 1].map((currentObjectID) => (
            <Col lg={3} key={currentObjectID}>
              <ArtworkCard objectID={currentObjectID} />
            </Col>
          ))
        ) : (
          <Card>
            <Card.Body>
              <h4>Nothing Here</h4>
              Try searching for something else.
            </Card.Body>
          </Card>
        )}
      </Row>
      {artworkList.length > 0 && (
        <Row className="mt-4">
          <Col>
            <Pagination>
              <Pagination.Prev onClick={previousPage} />
              <Pagination.Item active>{page}</Pagination.Item>
              <Pagination.Next onClick={nextPage} />
            </Pagination>
          </Col>
        </Row>
      )}
    </>
  );
}
