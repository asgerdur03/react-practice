import { use, useEffect, useState } from "react";

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
export default function useLocalStorage(keyName, initialValue) {

    // Add your solution here
    const [storedValue, setStoredValue] = useState(initialValue); //setja in values frá local storage, yfirleitt [] í upphafi
    useEffect(() => {
        const item = window.localStorage.getItem(keyName); 
        if (item) {
            setStoredValue(JSON.parse(item));
        }
    }, [keyName]); // sækir frá local storage
    
    useEffect(() => { // keyrir þegar local storage uppfærist
        try {
            window.localStorage.setItem(keyName, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [keyName,storedValue]);

    return [storedValue, setStoredValue];
}