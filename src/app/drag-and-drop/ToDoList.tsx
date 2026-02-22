'use client';
import React, { useState } from "react";
import { DragEndEvent, closestCorners, DndContext, DragOverEvent, closestCenter } from "@dnd-kit/core";
import Column from "./Column";
import { COLUMNS, Status, Todo } from "./types";
import { arrayMove } from "@dnd-kit/sortable";

type ToDoListProps = {
    todos: Todo[];
}



export default function ToDoList({ todos }: ToDoListProps) {
    const [todosState, setTodosState]= useState<Todo[]>(todos);

    function handleDragEnd(event: DragEndEvent) {
        const { over, active } = event;

        if (!over) {
            return;
        }

        const activeId = Number(active.id);
        const overId  = over.id
        
        const activeIndex = todosState.findIndex(
        (t) => t.id === activeId
        );

        const overIndex = todosState.findIndex(
        (t) => t.id === overId
        );

        if (activeIndex !== -1 && overIndex !== -1) {
        const activeStatus = todosState[activeIndex].status;
        const overStatus = todosState[overIndex].status;

        if (activeStatus === overStatus) {
            setTodosState(arrayMove(todosState, activeIndex, overIndex));
        }
    }
        
    }

    function handleDragOver(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;

        const activeId = Number(active.id);
        const overId = over.id;

        const activeTodo = todosState.find((t) => t.id === activeId);
        if (!activeTodo) return;

        if (typeof overId === "string") {
        const newStatus = overId as Status;

        if (activeTodo.status !== newStatus) {
        setTodosState((prev) =>
            prev.map((todo) =>
                todo.id === activeId
                ? { ...todo, status: newStatus }
                : todo
            )
        );
        }
    }
    
    }



return ( 
    <DndContext 
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
        onDragOver={handleDragOver}
    >
        <div style={{display: "flex", gap: "10px"}}>
                {COLUMNS.map((column) => (
                    <Column 
                        key={column.id} 
                        columnId={column.id} 
                        title={column.title} 
                        items={todosState.filter((todo) => todo.status === column.id)} />
                ))}
        </div>
    </DndContext>
)};

