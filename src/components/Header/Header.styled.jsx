import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 700;
  color: black;
  margin-right: 20px;
  text-decoration: none;
  &.active {
    color: #0070ba;
  }
`;

export const listNav = styled.nav``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const PageHeader = styled.header`
  padding: 20px;
  box-shadow: 0 2px 8px #8e8e8e;
`;
