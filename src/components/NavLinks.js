import { NavLink } from 'react-router-dom';
// import { useAppContext } from '../context/appContext.js';

import styled from 'styled-components';
import { links } from '../utils/links.js';

const NavLinks = ({ showSidebar, toggleSidebar, toggle }) => {
  const isActive = true;
  return (
    <Wrapper className='nav-links'>
      {links.map((link) => {
        const { id, text, url, icon } = link;
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active nav-link' : 'nav-link'
            }
            to={url}
            key={id}
            onClick={toggle ? toggleSidebar : null}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
// const Wrapper = styled.div`

//   .nav-link {
//     display: flex;
//     align-items: center;
//     color: var(--grey-500);
//     padding: 1rem 0;
//     text-transform: capitalize;
//     transition: var(--transition);
//   }
//   .nav-link:hover {
//     color: var(--grey-900);
//   }
//   .nav-link:hover .icon {
//     color: var(--primary-500);
//   }
//   .icon {
//     font-size: 1.5rem;
//     margin-right: 1rem;
//     display: grid;
//     place-items: center;
//     transition: var(--transition);
//   }
//   .active {
//     color: var(--grey-900);
//   }
//   .active .icon {
//     color: var(--primary-500);
//   }
// `;
export default NavLinks;
