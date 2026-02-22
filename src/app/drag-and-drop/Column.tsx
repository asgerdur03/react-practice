'use client';
import Card from "./Card";
import { Todo, Status } from "./types";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";



export default function Column({columnId, title, items,}: {columnId: Status; title: string; items: Todo[];}) {
    
    const {setNodeRef, isOver} = useDroppable({
        id: columnId,
    });

    return (
        <div ref={setNodeRef}
        style={{
            flex: 1,
            border: "1px solid #ddd",
            padding: 12,
            background: isOver ? "#f4f4f4" : "white", // optional visual feedback
            minHeight: "400px",
        }}
        >
            <h2>{title}</h2>
                <SortableContext
                    items={items.map((t) => t.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {items.map((t) => (
                        <Card key={t.id} todo={t} />
                ))}
                </SortableContext>
        </div>
    )
}