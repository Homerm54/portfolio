import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Link } from "components/ui";
import { Container, Item, Limiter } from "./style";

const IconSize = '2x';

function Contact(): JSX.Element {
  return (
    <Container>
      <Divider text={<h2>Where to reach me</h2>} style={{ fontSize: 20 }} />

      <Limiter>
        <p>
          Feel free to leave a message in my inbox, and I will try to get back to you.
        </p>

        <Item.Section>
          <Item.Container as={Link} href="mailto:omer.marquezt@gmail.com" target="_blank">
            <Item.Icon>
              <FontAwesomeIcon icon="envelope" size={IconSize} />
            </Item.Icon>
            <Item.Text>
              Get in touch with me
            </Item.Text>
          </Item.Container>
    
          <Item.Container as={Link} href="https://www.linkedin.com/in/omer-marquez" target="_blank">
            <Item.Icon>
              <FontAwesomeIcon icon={['fab', 'linkedin']} size={IconSize} />
            </Item.Icon>
    
            <Item.Text>
              Linked In
            </Item.Text>
          </Item.Container>
    
          <Item.Container as={Link} href="https://www.github.com/Homerm54" target="_blank">
            <Item.Icon>
              <FontAwesomeIcon icon={['fab', 'github']} size={IconSize} />
            </Item.Icon>
    
            <Item.Text>
              Github Profile
            </Item.Text>
          </Item.Container>
    
          <Item.Container as={Link} href="portfolio/resume.pdf" target="_blank">
            <Item.Icon>
              <FontAwesomeIcon icon="file" size={IconSize} />
            </Item.Icon>
    
            <Item.Text>Resume</Item.Text>
          </Item.Container>
        </Item.Section>
      </Limiter>
    </Container>
  );
}


export { Contact };
