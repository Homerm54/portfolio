import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "components/ui";
import { Header, About as Style, Container } from "./style";

function About(): JSX.Element {

  return(
    <Container>
      <Header.Container>
        <Header.Name>Omer Marquez</Header.Name>
        <Header.Headline>Full Stack Web Developer | Engineer</Header.Headline>
      </Header.Container>

      <Style.Container>
        <p>
          I'm a Full Stack Software Developer and Engineer, graduated in 2021 at&nbsp;
          <Link href="https://www.urbe.edu/" target="_blank" type="primary">Universidad Dr. Rafael Belloso Chachín</Link>.
          Passionate about science and technology, motivated by innovation, engineering, and shaping a better future.
          Knowledgeable in the magics, tricks, nuts and bolts about web applications,
          cloud services, software design, patterns, and more.
        </p>

        <p>
          Some of the languages, tools and platforms that I have been working with:
        </p>

        <Style.List>
          <li><FontAwesomeIcon icon="caret-right" className="caret" /> JavaScript / Typescript</li>
          <li><FontAwesomeIcon icon="caret-right" className="caret" /> React.js / Next.js</li>
          <li><FontAwesomeIcon icon="caret-right" className="caret" /> CSS / SCSS / Style Frameworks (MUI - Ant Design)</li>
          <li><FontAwesomeIcon icon="caret-right" className="caret" /> Node.js / Express.js / MongoDB</li>
          <li><FontAwesomeIcon icon="caret-right" className="caret" /> AWS / Heroku / Firebase</li>
        </Style.List>
      </Style.Container>
    </Container>
  );
}


export { About };
