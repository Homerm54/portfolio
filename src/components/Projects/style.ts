import styled from "styled-components";

const Container = styled.section`
  margin-top: ${({ theme }) => theme.spacing(13)}px;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  min-height: 100vh;
`;

const ProjectStyle = {
  Container: styled.div`
    display: flex;

    margin: ${({ theme }) => theme.spacing(4)}px 0;
  `,
  Image: styled.img`
    width: 50%;
    object-fit: scale-down;
  `,
  Content: styled.div`
    position: relative;
    top: 0;
    left: -50px;
    
    border: ${({ theme }) => theme.borderRadius + 2}px;
    background-color: #112240;
    padding: ${({ theme }) => theme.spacing(2)}px;
  `,
  Title: styled.h3`
    font-weight: bold;
    font-size: xx-large;
  `,
  Description: styled.div`
  `,
  Tools: styled.span`
    font-size: ${({ theme }) => theme.baseFontSize - 1}px;
    color: ${({ theme }) => theme.palette.grey[200]};
    display: inline-block;
    padding: ${({ theme }) => `${theme.spacing(1)}px ${theme.spacing(1.25)}px`};
  `,
  Links: styled.div``,

  Metadata: styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: end;

    /* & > div {
      padding-right: ${({ theme }) => theme.spacing(0.5)}px;
    } */
  `,
}

const SideTitle = styled.h3`
  font-size: 1.85rem;
  text-align: center;
  margin: 4rem 0;
  display: inline-block;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex: 1 1 33.33%;
  }
`;

const CardStyle = {
  Container: styled.div`
    padding: ${({ theme }) => theme.spacing(1)}px;
    margin: 0 ${({ theme }) => theme.spacing(1)}px;
    background-color: #112240; // Light navy
  `,
  Icon: styled.div``,
  Title: styled.div`
    font-weight: bold;
    font-size: ${({ theme }) => theme.baseFontSize + 2}px;
  `,
  Metadata: styled.div``,
  Content: styled.div``,
}


export { Container, ProjectStyle, SideTitle, CardStyle, CardContainer };
