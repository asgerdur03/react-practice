'use client';
import React, { useState } from 'react'
import styles from './Accordion.module.css'



export default function Accordion({items}) {

    const [isOpen, setIsOpen] = useState(null);

    const handleCollapse = (index) => () => {
        if (isOpen === index) {
            setIsOpen(null);
        } else {
            setIsOpen(index);
        }
    };


    return (
        <div className={styles.accordionContainer}>
            {items.map((item, index) => (
                <div key={index} className={styles.accordionMenu}>
                    <div 
                        className={styles.accordionHeader} 
                        onClick={handleCollapse(index)}>
                            <h3 className={styles.accordionHeaderTitle}>{item.title}</h3>
                            <button className={styles.accordionHeaderButton}>{isOpen === index ? "-" : "+"}</button> 
                    </div>
                
                {isOpen === index && <p>{item.content}</p>}
                </div>
            ))}
        </div>
    )
}