import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  height: 100vh;
`;

export const Header = styled(Section)`
  text-align: center;
  background: linear-gradient(to bottom right, #00c853, #39b3fc);
`;

export const RetroSection = styled(Section)`
  & img {
    border-radius: 15px;
    box-shadow: 0 0 64px black;
  }
`;

export const Frontend = styled(Section)``;

export const Test = styled(Section)``;

export const Backend = styled(Section)``;

export const Database = styled(Section)``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  min-width: 40ch;
  padding: 1rem;
  align-self: baseline;

  & h2 {
    margin-bottom: 1rem;
  }
`;

export const SpinContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: spin 7s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CoverageText = styled.div`
  display: inline;
  & span,
  & {
    background: linear-gradient(to bottom right, #00c853, #39b3fc);
    color: transparent;
    -webkit-background-clip: text;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;
