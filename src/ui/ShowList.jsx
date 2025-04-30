import styled from 'styled-components';

const ShowList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  & > * {
    min-width: 0; /* Prevents grid item overflow */
  }

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media (min-width: 90em) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

export default ShowList;
