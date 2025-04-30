import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from './Heading';
import Show from './Show';
import ShowList from './ShowList';
import { useSearchParams } from 'react-router-dom';

const ResultsContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function SearchResults({ results }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <ResultsContainer>
      <Heading as="h1">
        Found {results.length} {results.length > 1 ? 'results' : 'result'} for{' '}
        &apos;{query}&apos;
      </Heading>
      <ShowList>
        {results?.map(show => (
          <Show
            show={show}
            key={show.id}
          />
        ))}
      </ShowList>
    </ResultsContainer>
  );
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};
export default SearchResults;
