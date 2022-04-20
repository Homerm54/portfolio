import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Header = {
  Container: styled.div`
    margin: ${({ theme }) => theme.spacing(4)}px 0;
    text-align: center;
  `,
  Name: styled.h1`
    font-size: 8rem;
    font-weight: 100;
    line-height: 1.2567em;
  `,
  Headline: styled.h3`
    font-size: 1.25rem;
    font-weight: 300;
  `,
};

const About = {
  Container: styled.div`
    max-width: 75%;
    margin: auto;

    & > p {
      margin: ${({ theme }) => theme.spacing(2)}px 0;
    }
  `,
  List: styled.ul`
    list-style: none;
    margin-top: ${({ theme }) => theme.spacing(3)}px;
    /* margin-left: ${({ theme }) => theme.spacing(2)}px; */

    & .caret {
      color: ${({ theme }) => theme.palette.info.main};
      margin-right: ${({ theme }) => theme.spacing(1)}px;
    }
  `,
}

export { Header, About, Container };
