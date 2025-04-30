import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const StyledAppLayout = styled.div`
  display: grid;
  background-color: var(--color-dark-blue);
  grid-template-columns: 1fr;
  grid-template-rows: auto min-content;
  width: 95%;
  overflow-x: hidden;
  grid-template-areas:
    'nav'
    'main';

  @media (min-width: 64em) {
    grid-template-columns: max-content 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'nav main';
  }
`;

const NavigationBar = styled.div`
  grid-area: nav;
  height: fit-content;
  width: 100%;

  @media (min-width: 48em) {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }

  @media (min-width: 64em) {
    grid-row: 1 / -1;
    height: 90%;
  }
`;

const MainContent = styled.main`
  grid-area: main;
  width: 100%;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavigationBar>
        <Header />
      </NavigationBar>

      <MainContent>
        <Outlet />
      </MainContent>
    </StyledAppLayout>
  );
}

export default AppLayout;
