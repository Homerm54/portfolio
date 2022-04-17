import styled from "styled-components";

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const BodyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => (theme.zIndex.modal + 1)};
  min-width: 300px;
  max-width: 700px;
`;

export { Mask, BodyContainer };
