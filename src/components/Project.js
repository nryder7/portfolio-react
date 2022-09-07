import { FaGithub } from 'react-icons/fa';
import { GrHeroku } from 'react-icons/gr';

const Project = ({ id, title, sourceUrl, deployedUrl, description }) => {
  return (
    <article className='single-project'>
      <div className='project-container'>
        <img
          className='img'
          src={require(`../assets/images/project-${id}.jpeg`)}
          alt={title}
        />
        <a href={deployedUrl} className='project-icon'>
          <GrHeroku />
        </a>
      </div>
      <div className='project-details'>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className='project-footer'>
          <span>
            <FaGithub />
          </span>
          <a href={sourceUrl}>source code</a>
        </div>
      </div>
    </article>
  );
};
export default Project;
