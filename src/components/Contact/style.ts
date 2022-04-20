import styled from "styled-components";

const Container = styled.section`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(8)}px 0;
  padding: ${({ theme }) => theme.spacing(2)}px 0;
  font-size: ${({ theme }) => theme.baseFontSize + 2}px;
`;

const Limiter = styled.div`
  max-width: 520px;
  margin: auto;
`;

const Item = {
  Section: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    text-align: center;

    margin-top: ${({ theme }) => theme.spacing(3)}px;
  `,
  Container: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2)}px;
    flex: 1 1 50%;
  `,
  Icon: styled.span`
  `,
  Text: styled.span`
  `,
}

export { Container, Item, Limiter };
