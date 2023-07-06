import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from '../../API/TheMovieDB-API';
import {
  Container,
  List,
  ListItem,
  StyledLink,
  Input,
  SearchBtn,
} from './MoviePage.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    if (!queryName) return;
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
  }, [queryName]);

  const handleSubmit = async e => {
    e.preventDefault();
    const query = e.target.query.value.trim().toLowerCase();
    if (!query) return;
    setSearchParams({ query: query });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input name={'query'} type="text" />
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
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
