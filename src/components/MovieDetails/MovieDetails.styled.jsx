import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

export const MovieInfoWrap = styled.div`
  display: flex;
  align-items: start;
  margin-top: 10px;
`;

export const AboutMovieWrap = styled.div`
  padding: 0 20px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 0;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #8e8e8e;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #000;
  text-decoration: none;
  transition: color 250ms linear, background-color 250ms linear,
    border-color 250ms linear;
  &:hover {
    background-color: #0070ba;
    color: #fff;
    border-color: #0070ba;
  }
`;

export const BackLinkArrow = styled(ArrowIcon)`
  fill: currentColor;
`;

export const Container = styled.div`
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  transition: color 250ms linear;
  &:hover {
    color: #0070ba;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap:10px;
  color: black;
  text-decoration: none;
  transition: color 250ms linear;
  &:hover,
  &.active {
    color: #0070ba;
  }
  &::before{
    content: "\";
    width: 6px;
    height: 6px;
    background-color: currentColor;
  }
`;

export const BlockWrapper = styled.div`
  box-shadow: 0 2px 4px #8e8e8e;
  padding: 20px;
`;
