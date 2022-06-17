import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../styles/Breakpoints";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: black;
  }
`;

export const Styled404Link = styled(StyledHomeLink)`
  font-size: 1rem;

  @media ${devices.tablet} {
    font-size: 1.2rem;
  }
  @media ${devices.dekstop} {
    font-size: 1.4rem;
  }
`;
