import styled from "styled-components";

export const Card = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  width: 100%;
  min-height: 1rem;
  padding: 0.25rem;
`;
