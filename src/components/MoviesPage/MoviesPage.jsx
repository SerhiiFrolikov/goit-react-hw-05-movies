import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from '../API/TheMovieDB-API';
import { Container, List, ListItem, StyledLink } from './MoviesPage.styled';
import { Input, SearchBtn } from './MoviesPage.styled';

const Movies = () => {
  const location = useLocation();
  const [SearchParams, setSearchParams] = useSearchParams();
  const queryName = SearchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);
  const [currentQuery, setCurrentQuery] = useState(queryName);
  const [loadingMovies, setLoadingMovies] = useState(false);

  useEffect(() => {
    if (queryName !== '' && loadingMovies)
      (async () => {
        try {
          const { data } = await fetchMovieSearch(queryName);
          if (data.results.length === 0) {
            Notiflix.Notify.failure(
              'There are no movies matching you search query. Please try again.'
            );
          }
          setSearchMovies(data.results);
        } catch (error) {
          console.log(error);
        }
      })();
    setLoadingMovies(true);
  }, [loadingMovies, queryName]);

  const updateQueryName = event => {
    setCurrentQuery(event.target.value);
  };

  const findMoviesByQuery = async () => {
    setSearchParams({ query: currentQuery });
    setLoadingMovies(true);
  };
  return (
    <Container>
      <Input value={currentQuery} onChange={updateQueryName} type="text" />
      <SearchBtn
        type="submit"
        onClick={findMoviesByQuery}
        disabled={currentQuery.trim() === ''}
      >
        Search
      </SearchBtn>
      <List>
        {searchMovies.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
export default Movies;
