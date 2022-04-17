import styled from "styled-components";
import { StyledLinkProps } from "./types";

const StyledNormalLink = styled.a<StyledLinkProps>`
  text-decoration: none;
  color: ${({ theme, $active, $type }) => (
    ($active || $type === "primary")
      ? theme.palette.primary.main
      : theme.palette.text.primary
  )};

  :hover {
    text-decoration: none;
    color: ${({ theme, $active, $type }) => (
    ($active || $type === "primary")
      ? theme.palette.primary.dark
      : theme.palette.text.disabled
  )};
  }
`;

export { StyledNormalLink };
