import styled from "styled-components";

export const Column = styled.div`
  background-color: #f2f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  min-width: 10rem;
  max-width: 10rem;
  min-height: 13rem;
  border-radius: 2px;
  box-shadow: 0 2px 4px 4px rgb(0 0 0 / 50%);
`;

export const Bar = styled.div<{ color: string }>`
  margin: 0.5rem;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  height: 15px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1rem;
  text-align: left;
  color: black;
  align-self: flex-start;
  font-weight: 700;
  margin-bottom: 0.5rem;
  user-select: none;
`;

export const InnerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 10rem;
  max-width: 10rem;
  height: 100%;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
`;
