import styled from "styled-components";

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
    border-radius: 10px;
  }

  &:visited {
    text-decoration: none;
    color: black;
  }
`;
