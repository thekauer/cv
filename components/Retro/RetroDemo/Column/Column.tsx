import { Droppable } from "react-beautiful-dnd";
import { Card } from "../Card/Card";
import * as S from "./Column.atoms";

interface ColumnProps {
  column: any;
  droppableId: string;
}

export const Column = ({ column, droppableId }: ColumnProps) => {
  return (
    <S.Column>
      <S.Bar color={column.color} />
      <S.Title>{column.title}</S.Title>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <S.InnerColumn ref={provided.innerRef} {...provided.droppableProps}>
            <S.CardsContainer>
              {column.items.map((card: any, index: number) => (
                <Card
                  key={card.draggableId}
                  draggableId={card.draggableId}
                  index={index}
                  color={card.color}
                />
              ))}
              <S.PlaceholderContainer draggingOver={snapshot.isDraggingOver}>
                {provided.placeholder}
              </S.PlaceholderContainer>
            </S.CardsContainer>
          </S.InnerColumn>
        )}
      </Droppable>
    </S.Column>
  );
};
