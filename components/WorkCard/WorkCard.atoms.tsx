import styled, { css } from "styled-components";

interface ContainerProps {
  from: string;
  to: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-dark);
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  gap: 1rem;
  padding: 1rem 2rem;
  margin: 2rem;
  min-width: 15rem;

  ${({ from, to }) => css`
    border-radius: 10px;
    border: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to bottom right, ${from}, ${to});

    &:hover {
      box-shadow: 0px 8px 8px ${from}05, 8px 16px 16px ${from}05;
    }
  `}
`;

export const Header = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 11rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Logo = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
