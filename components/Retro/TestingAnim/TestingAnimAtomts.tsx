import styled from "styled-components";

export const Terminal = styled.div`
  border-radius: 5px;
  padding: 1rem;
  background: #151718;
  box-shadow: 0 16px 16px rgba(0, 0, 0, 0.25);
  min-width: 16rem;
  min-height: 7rem;
`;

export const Cursor = styled.div<{ position: number }>`
  position: absolute;
  left: ${(props) => props.position}ch;
  width: 1ch;
  height: 1rem;
  background-color: #f8f8f2;
  transition: all 0.1s ease-in-out;
  animation: blink 1s step-end infinite;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  position: relative;
`;
