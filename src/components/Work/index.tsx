import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Link, Tab } from "components/ui";
import { Container, Workspace } from "./style";

function WorkList(): JSX.Element {

  return(
    <Container>
      <Divider text={<h2>Work Experience</h2>} style={{ fontSize: 20 }} />

      <div style={{ marginTop: 60 }}>
        <Tab.Group initialActiveTab="servi" tabPosition="left">
          <Tab.Item tabKey="servi" label="Servibird">
            <Workspace.Container>
              <h3>
                <Workspace.Title.Position>Full Stack Web Developer</Workspace.Title.Position>
                <Workspace.Title.At>@</Workspace.Title.At>
                <Workspace.Title.Company>
                  <Link href="https://servibird.com/" target="_blank" type="primary">Servibird</Link>
                </Workspace.Title.Company>
              </h3>

              <Workspace.Date>February 2021 – April 2022</Workspace.Date>

              <Workspace.List>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Planned, developed, tested, deployed, and maintained web applications and microservices following tight schedules.</Workspace.Item>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Provided effective troubleshooting and remediation for web applications and cloud services on time.</Workspace.Item>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Use of AWS cloud services like Amplify, Elastic Beanstalk, EC2, and S3, as well as Firebase to solve complex problems.</Workspace.Item>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Improved development time up to 30%, bringing projects back on schedule.</Workspace.Item>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Worked on extensive and complex front-end codebase using React, Ant Design and Next.js, as well as back-end codebases using Node.js, with Express.js for APIs implementing TypeScript.</Workspace.Item>
              </Workspace.List>
            </Workspace.Container>
          </Tab.Item>

          <Tab.Item tabKey="nova" label="Nova Kaelum">
            <Workspace.Container>
              <h3>
                <Workspace.Title.Position>Full Stack Web Developer</Workspace.Title.Position>
                <Workspace.Title.At>@</Workspace.Title.At>
                <Workspace.Title.Company>Nova Kaelum</Workspace.Title.Company>
              </h3>
    
              <Workspace.Date>October 2019 – January 2021</Workspace.Date>
    
              <Workspace.List>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Involved in several aspects of design and development of web applications, offering alternatives and solutions when necessary.</Workspace.Item>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Managed multiples front-end projects using React, Material UI and Redux, in addition to back-end projects using Node.js, Express.js.</Workspace.Item>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Solved multiple problems for core aspects through effective communication and implementation of best practices.</Workspace.Item>
                <Workspace.Item><FontAwesomeIcon icon="caret-right" className="caret" /> Managed Source Control tasks using Git, such as reversing commits and solving merge conflicts, along with working with drafts.</Workspace.Item>
              </Workspace.List>
            </Workspace.Container>
          </Tab.Item>
        </Tab.Group>
      </div>
    </Container>
  );
}


export { WorkList };
