import styled from "styled-components";

const Container = styled.section`
  margin-top: ${({ theme }) => theme.spacing(13)}px;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  height: 70vh;
`;

const Workspace = {
  Container: styled.div``,
  Date: styled.span`
    display: block;
    margin-top: ${({ theme }) => theme.spacing(0.75)}px;
    margin-bottom: ${({ theme }) => theme.spacing(1.5)}px;
    color: ${({ theme }) => theme.palette.text.secondary};
  `,
  Title: {
    At: styled.span`
      font-weight: bold;
      margin: 0 ${({ theme }) => theme.spacing(0.75)}px;
      color: ${({ theme }) => theme.palette.info.main};
    `,
    Position: styled.span`
      font-weight: bold;
    `,
    Company: styled.span`
      font-weight: bold;
      color: ${({ theme }) => theme.palette.info.main};
    `,
  },
  List: styled.ul`
    list-style: none;
  `,
  Item: styled.li`
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing(1.25)}px;
    display: flex;

    & > svg {
      margin-top: ${({ theme }) => theme.spacing(0.5)}px;
      margin-right: ${({ theme }) => theme.spacing(2)}px;
      color: ${({ theme }) => theme.palette.info.main};
    }
  `,
}

export { Container, Workspace };
