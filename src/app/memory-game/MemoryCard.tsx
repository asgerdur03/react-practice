import React from "react";
import Image from "next/image";

type MemoryCardProps = {
    cardId: number;
    image: string;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;

    size?: number
};

export default function MemoryCard({ 
    cardId, 
    image, 
    isFlipped, 
    isMatched, 
    onClick,
    size = 150
}: MemoryCardProps) {

    const isDisabled = isFlipped || isMatched;


    return (
        <button 
            type="button"
            onClick={onClick}
            disabled={isDisabled}
            style={{
                width: size,
                height: size,
                cursor: isDisabled ? "default" : "pointer",
                border: "none",
                borderRadius: "10px",
                overflow: "hidden",

            }}
        >
            {isFlipped ? (
                <Image 
                    src={image}
                    alt={`card ${cardId}`}
                    width={size}
                    height={size}
                    style={{ display: "block", objectFit: "cover" }}

                />
            ) : (
                <div style={{ width: size, height: size, backgroundColor: "#70a3f5"   }} />
            )}

        </button>
    );
};