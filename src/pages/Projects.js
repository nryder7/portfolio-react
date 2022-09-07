import styled from 'styled-components';
import { Project } from '../components';
import { projectLinks } from '../utils/links';

const Projects = () => {
  return (
    <Wrapper>
      <header className='projects-hero'>
        <div className='section-title'>
          <h1>my projects</h1>
          <div className='underline'></div>
        </div>
      </header>
      <section className='section'>
        <div className='section-center projects-page-center'>
          {projectLinks.map((project) => {
            return <Project key={project.id} {...project} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .projects-hero {
    height: 40vh;
    background: var(--clr-primary-10);
    display: grid;
    place-items: center;
  }
  .projects-hero .section-title {
    margin-bottom: 0;
  }
  .projects-page-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 1rem;
  }
  .single-project {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
  }
  .project-container img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 300px;
  }
  .project-container {
    position: relative;
  }
  .project-icon {
    position: absolute;
    font-size: 1.75rem;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: var(--clr-primary-5);
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--clr-primary-1);
    border: 0.375rem solid var(--clr-grey-10);
  }
  .project-details {
    padding: 2rem 1.5rem;
  }
  .project-footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .project-footer {
    color: var(--clr-primary-5);
  }
  .project-footer a {
    text-transform: capitalize;
    color: var(--clr-primary-5);
    transition: var(--transition);
    justify-self: end;
  }
`;
export default Projects;
