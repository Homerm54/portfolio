import styled, { css } from "styled-components";
import { StyledLinkProps } from "./types";

const StyledNormalLink = styled.a<StyledLinkProps>`
  text-decoration: none;
  display: inline-block; // Added, check if inline or
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;

  color: ${({ theme, $active, $type }) => (
    ($active || $type === "primary")
      ? theme.palette.info.main
      : theme.palette.text.primary
  )};

  :hover {
    text-decoration: none;
    color: ${({ theme, $active, $type }) => (
    ($active || $type === "primary")
      ? theme.palette.info.main
      : theme.palette.text.disabled
    )};
  }

  ${({ $center, $type, theme }) =>
    !$center
    ? ''
    : css`
      :after {
        content: '';
        display: block;
        width: 100%;
        position: relative;
        height: 2px;
        background: ${($type === "primary") ? theme.palette.info.main : 'transparent'};
        transition: width .3s;
        bottom: 0.2em;
        opacity: 0.5;

        transform: scaleX(0);
        transition: transform ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.sharp};
        transform-origin: ${
          $center === 'left'
            ? '0% 50%'
            : $center === 'right'
              ? '100% 50%'
              : '50% 50%'
        }
      }

      :hover::after {
        transform: scaleX(1);
      }
    `
  }
`;

export { StyledNormalLink };
