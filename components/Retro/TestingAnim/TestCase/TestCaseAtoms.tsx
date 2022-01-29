import styled from "styled-components";

export const Highlight = styled.span<{ color: string }>`
  background-color: ${(props) => props.color};
  font-weight: 700;
  color: #151718;
  padding: 0 0.25rem;
  margin-right: 1rem;
`;

export const Row = styled.div`
  display: flex;
  margin: 4px 0;
`;
