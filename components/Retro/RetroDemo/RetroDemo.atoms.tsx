import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 90vw;
  padding: 0 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
