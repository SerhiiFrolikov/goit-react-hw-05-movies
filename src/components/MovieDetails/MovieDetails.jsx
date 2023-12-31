import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation, Navigate } from 'react-router-dom';

import {
  MovieInfoWrap,
  AboutMovieWrap,
  GenresList,
  BackLink,
  BackLinkArrow,
  StyledLink,
  ListItem,
  List,
  BlockWrapper,
} from './MovieDetails.styled';

import { fetchMovieDetails } from '../../API/TheMovieDB-API';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      }
    })();
  }, [movieId]);

  return (
    <>
      {error && <Navigate to="/movies" />}
      {movieDetails && (
        <div>
          <BlockWrapper>
            <BackLink to={backLinkLocationRef.current}>
              <BackLinkArrow width="20" height="20" />
              Go back
            </BackLink>
            <MovieInfoWrap>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`
                    : `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg`
                }
                alt={movieDetails.title}
                width="300"
              />
              <AboutMovieWrap>
                <h1>
                  {movieDetails.title}({movieDetails.release_date.slice(0, 4)})
                </h1>
                <p>User Score{Math.round(movieDetails.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <GenresList>
                  {movieDetails.genres.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
                </GenresList>
              </AboutMovieWrap>
            </MovieInfoWrap>
          </BlockWrapper>
          <BlockWrapper>
            <h3>Additional information</h3>
            <List>
              <ListItem>
                <StyledLink to={'cast'}>Cast</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to={'reviews'}>Reviews</StyledLink>
              </ListItem>
            </List>
          </BlockWrapper>
          <Suspense
            fallback={
              <div>
                <div>Loading...</div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
