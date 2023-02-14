import { Container, Row, Col } from "react-bootstrap";

function MovieDetails(props) {
  const { movie } = props;
  return (
    <Container>
      <Row>
        {movie.poster && (
          <Col md>
            <img src={movie.poster} alt="poster" className="w-100" />
            <br />
            <br />
          </Col>
        )}
        <Col md>
          <strong>Directed By:</strong>{" "}
          {movie.directors ? movie.directors.join(", ") : "N/A"}
          <br />
          <br />
          <p>{movie.fullplot}</p>
          <strong>Cast:</strong> {movie.cast ? movie.cast.join(", ") : "N/A"}
          <br />
          <br />
          <strong>Awards:</strong> {movie.awards ? movie.awards.text : "N/A"}
          <br />
          <strong>IMDB Rating:</strong> {movie.imdb ? movie.imdb.rating : "N/A"}{" "}
          ({movie.imdb ? movie.imdb.votes + " votes" : "N/A"})
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
