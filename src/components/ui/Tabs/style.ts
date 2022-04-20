import { animated } from "@react-spring/web";
import styled, { css } from "styled-components";
import { TabGroupStyleProps, TabHeaderStyleProps, TabItemStyleProps, TabPanelStyleProps } from "./types";

const TabItemLabel = styled.span`
  margin: 0 ${({ theme }) => theme.spacing(1.25)}px;
`;

const TabItemStyle = styled.div<TabItemStyleProps>`
  transition-duration: 0.75s;
  font-weight: ${({ $isActive }) => ( $isActive ? 'bold' : 'normal' )};
  border: 2px solid transparent;
  border-radius: 3px;
  border-${({ $position }) => $position === 'top' ? 'bottom' : 'right'}-color: ${({ $isActive, theme }) => (
    $isActive
      ? theme.palette.primary.main
      : 'none'
  )};
      
  background-color: ${({ $isActive, theme }) => (
    $isActive
      ? `${theme.palette.primary[900]}30`
      : 'none'
    )};
  }
`;

const TabHeaderStyle = styled.div<TabHeaderStyleProps>`
  display: flex;
  width: 100%;
  ${({ $position }) =>
  $position === 'top'
    ? ''
    : css`
      max-width: max-content;
      flex-flow: column;
      margin-right: ${({ theme }) => theme.spacing(2)}px;
    `
  }
  justify-content: ${({ $alignment }) => $alignment};
  
  /* TODO: This scroll should be styled with a button, and on click */
  overflow-x: auto;

  & > ${TabItemStyle} {
    padding: ${({ theme }) => theme.spacing(0.25)}px ${({ theme }) => theme.spacing(1)}px;
  }
`;

const TabGroupStyle = styled.div<TabGroupStyleProps>`
  display: flex;
  flex-flow: ${({ $position }) => $position === 'top' ? 'column' : 'row'};
`;

const TabPanelStyle = styled(animated.div) <TabPanelStyleProps>`
  position: relative;
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
`;

export { TabGroupStyle, TabItemStyle, TabPanelStyle, TabHeaderStyle, TabItemLabel };