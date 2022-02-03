import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  height: 100vh;
`;

export const Header = styled(Section)`
  text-align: center;
  background: linear-gradient(to bottom right, #0cb3b9, #3e448b);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5 0;
  min-width: 40ch;
  padding: 1rem;
  align-self: baseline;

  & h2 {
    margin-bottom: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TechLogos = styled.div`
  & #nest,
  & #next {
    padding: 1rem !important;
  }
  & #nest {
    filter: drop-shadow(0 0 64px black);
    animation: change-shadow 10s steps(1, end) infinite;
  }

  & #next {
    animation: pulse 3s ease infinite;
  }

  @keyframes pulse {
    0% {
      filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0.7));
    }

    70% {
      filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0));
    }

    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0));
    }
  }

  @keyframes change-shadow {
    ${["#e53935", "#ffca28", "#43a047", "#0288d1", "#ab47bc"].map(
      (color, index, { length }) => css`
        ${(index / length) * 100}% {
          filter: drop-shadow(0px 0px 8px ${color}4b)
            drop-shadow(0px 0px 4px ${color}eb);
        }
      `
    )}
  }
`;

export const ImageShadow = styled.div`
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
`;

export const DbImageContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  margin-top: -2rem;
`;
