import { Draggable } from "react-beautiful-dnd";
import ReactDOM from "react-dom";
import * as S from "./Card.atoms";

interface CardProps {
  color: string;
  draggableId: string;
  index: number;
}

export const Card = ({ color, draggableId, index }: CardProps) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) =>
        snapshot.isDragging ? (
          ReactDOM.createPortal(
            <S.Card
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              color={color}
            />,
            document.querySelector("#__next") as Element
          )
        ) : (
          <S.Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            color={color}
          />
        )
      }
    </Draggable>
  );
};
