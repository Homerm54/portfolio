import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Link } from 'components/ui';
import { featured, legacy, Project } from './project_list';
import { CardContainer, CardStyle, Container, ProjectStyle, SideTitle } from './style';

function FeaturedProject({ project }: { project: Project }) {
  return (
    <ProjectStyle.Container>
      <ProjectStyle.Image
        src={project.image}
        alt="Cool Project Dashboard"
      />

      <ProjectStyle.Content>
        <ProjectStyle.Title>{project.title}</ProjectStyle.Title>

        <ProjectStyle.Description>
          {project.description}
        </ProjectStyle.Description>
        
        <ProjectStyle.Metadata>
          <div>
            {project.tools.map((tool) => <ProjectStyle.Tools>{tool}</ProjectStyle.Tools>)}
          </div>

          <ProjectStyle.Links>
            {
              typeof project.repo_link === 'string'
                ? <Link href={project.repo_link} target="_blank">Repo Link</Link>
                : (
                  project.repo_link.map((link) => <Link href={link.link} target="_blank">{link.name}</Link>)
                )
            }
          </ProjectStyle.Links>
        </ProjectStyle.Metadata>
      </ProjectStyle.Content>
    </ProjectStyle.Container>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <CardStyle.Container>
      <CardStyle.Icon>
        <FontAwesomeIcon icon="folder" size="2x" />
      </CardStyle.Icon>

      <CardStyle.Title>
        {project.title}
      </CardStyle.Title>

      <CardStyle.Content>
        {project.description}
      </CardStyle.Content>

      <CardStyle.Metadata>
        {project.tools.map((tool) => tool)}
      </CardStyle.Metadata>
    </CardStyle.Container>
  )
}

function ProjectList(): JSX.Element {
    return(
    <Container>
      <Divider text={<h2>Featured Projects</h2>} style={{ fontSize: 20 }} />
      
      { featured.map((project) => <FeaturedProject project={project} key={project.id} />) }

      {/* <SideTitle>Some remarkable projects</SideTitle>
        
      <CardContainer>
        { legacy.map((project) => <div><ProjectCard project={project} /></div>) }
      </CardContainer> */}
    </Container>
  );
}


export { ProjectList };
