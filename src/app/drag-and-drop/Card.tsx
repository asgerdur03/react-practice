'use client'
import { Todo } from "./types";

import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
export default function Card({ todo }: { todo: Todo }) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id: todo.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    
    return (
        <div 
        ref = {setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        >
            {todo.text}
        </div>
    )
}