import styled from 'styled-components';
const Contact = () => {
  return (
    <Wrapper>
      <div className='section-title'>
        <h1>contact</h1>
        <div className='underline'></div>
      </div>
      <div className='page-info section-center'>
        <p>
          You can send me an email at
          <a href='mailto:nryder7@email.com'> @nryder7@gmail.com</a>
        </p>
        <p>
          You can also reach me on LinkedIn at
          <a href='http://www.linkedin.com/in/nryder7'> @nryder7 </a>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: var(--clr-primary-10);
  min-height: calc(100vh - 5rem - 198px);
  .section-title {
    margin-bottom: 0;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
  }
  .page-info {
    max-width: 700px;
    background: var(--clr-primary-10);
  }

  .page-info a {
    text-transform: uppercase;
    color: var(--clr-primary-5);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  .page-info a:hover {
    color: var(--clr-primary-1);
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
`;
export default Contact;
