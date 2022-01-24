import { Draggable } from "react-beautiful-dnd";
import * as S from "./Card.atoms";

interface CardProps {
  color: string;
  draggableId: string;
  index: number;
}

export const Card = ({ color, draggableId, index }: CardProps) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <S.Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          color={color}
        />
      )}
    </Draggable>
  );
};
