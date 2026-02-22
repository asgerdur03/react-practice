export type Status = "to-do" | "in-progress" | "done";

export type Todo = {
    id:  string | number;
    text: string;
    status: Status;
};

export const COLUMNS: {id: Status; title: string}[] = [
    { id: "to-do", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" },
];

export const TRASH_ID = "trash";