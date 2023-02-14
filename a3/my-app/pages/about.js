import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export async function getStaticProps() {
  const res = await fetch(
    "https://long-plum-dalmatian-gear.cyclic.app/api/movies/573a139af29313caabcf0859"
  );
  const movie = await res.json();
  return { props: { movie } };
}

export default function About(props) {
  return (
    <div>
      <PageHeader text={<b>About the Developer: Xiaoyue Zhao</b>} />
      <Card className="bg-light">
        <Card.Body>
          <p>
            Hi, my name is Xiaoyue Zhao. Motivated and detail-oriented software
            engineering graduate with a passion for software testing and quality
            assurance. Proficient in manual and automated testing, familiar with
            Agile methodologies and software development life cycle. Skilled in
            problem-solving and communication.
          </p>
          <p>
            It had been a simple realization that had changed Debra's life
            perspective. It was really so simple that she was embarrassed that
            she had lived the previous five years with the way she measured her
            worth. Now that she saw what she had been doing, she could see how
            sad it was. That made her all the more relieved she had made the
            change. The number of hearts her Instagram posts received wasn't any
            longer the indication of her own self-worth.
          </p>
          <p>
            <Link href="/movies/Dark City">Dark City</Link> is a 1998 neo-noir
            science fiction film directed by Alex Proyas and starring Rufus
            Sewell, William Hurt, Kiefer Sutherland, Jennifer Connelly, Richard
            O'Brien, and Ian Richardson. The screenplay was written by Proyas,
            Lem Dobbs, and David S. Goyer. In the film, Sewell plays an amnesiac
            man who, finding himself suspected of murder, attempts to discover
            his true identity and clear his name while on the run from the
            police and a mysterious group known as the "Strangers".
          </p>
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
    </div>
  );
}
