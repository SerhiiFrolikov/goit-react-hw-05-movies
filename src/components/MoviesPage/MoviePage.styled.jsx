import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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

export const Input = styled.input`
  font-size: 18px;
  padding: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #000;
  &:focus-visible {
    border: 1px solid #0070ba;
    box-shadow: 0 0 2px #0070ba;
  }
`;

export const SearchBtn = styled.button`
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid #0070ba;
  background-color: #e8e8e8;
  color: #0070ba;
  border-radius: 3px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: #fff;
    background-color: #0070ba;
    outline: none;
  }
  :disabled {
    cursor: auto;
    border: 1px solid #8e8e8e;
    color: #8e8e8e;
    background-color: #e8e8e8;
  }
`;
