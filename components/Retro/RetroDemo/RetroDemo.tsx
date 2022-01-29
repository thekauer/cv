import * as S from "./RetroDemo.atoms";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "./Column/Column";
import { Slide } from "react-awesome-reveal";

import { useState } from "react";

export const RetroDemo = () => {
  const originalColumns = {
    [`drop_1`]: {
      color: "#66cea8",
      title: "LIKE",
      items: [
        { draggableId: "card_1", color: "#d4fbe6" },
        { draggableId: "card_2", color: "#d4fbe6" },
      ],
    },
    [`drop_2`]: {
      color: "#2d80e8",
      title: "MORE",
      items: [{ draggableId: "card_3", color: "#d9e6fd" }],
    },
  };
  const [columns, setColumns] = useState(originalColumns);

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <S.Container>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([id, column], index) => (
          <Slide triggerOnce direction="up" delay={index * 150} key={id}>
            <Column column={column} droppableId={id} />
          </Slide>
        ))}
      </DragDropContext>
    </S.Container>
  );
};
