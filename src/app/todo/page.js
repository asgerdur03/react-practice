/**
 * Create a custom hook that allows saving items to the local storage
 * 
 * You will start from an existing Todo List app (yes, another one!) built with React. 
 * It works great - users can add / remove items  
 * - but there is only one problem 
 * - every time the page is refreshed, all the items are lost.
 * 
 * Your task will be to implement persistence 
 * - the list of tasks should be saved to local storage, 
 * so that the user can continue where they left 
 * off after closing and reopening the browser window.
 * 
 * You can start from this starter repo on Github, 
 * containing the todo list app: https://github.com/reactpractice-dev/local-storage-hook
 * 
 * Implementation notes: Use a custom hook to encapsulate the saving to local storage logic
 */

'use client';
import React from "react";
import TodoList from "./todo-list";

export default function TodoPage() {
  return (
    <div>
      <TodoList />
    </div>
  );
}