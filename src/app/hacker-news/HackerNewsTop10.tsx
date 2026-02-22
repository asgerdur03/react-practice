'use client';
import { useEffect, useState} from 'react'

type Story = {
    id: number;
    score: number;
    title: string;
    url: string;
    by: string;
}

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const HackerNewsTop10 = () => {

    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStories() {
            setLoading(true);
            
            const res = await fetch(BASE_URL + '/topstories.json');
            const storyIds: number[] = await res.json();

            const top10 = storyIds.slice(0, 10);
            const storyPromises = top10.map(async (id) => {
                const res = await fetch(BASE_URL + `/item/${id}.json`);
                return res.json();
            });

            const stories = await Promise.all(storyPromises);

            setStories(stories);
            setLoading(false);
                
        }

        loadStories();
    }, [])


    if (loading) return <div>Loading...</div>

    return (
        <div>
            <h1>Top 10 Hacker News</h1>
            {stories.map((story, index) => (
                <div 
                key={story.id}
                style={{
                    margin: "10px",
                    padding: "10px",
                    border: "1px solid black"
                }}
                
                >
                    <h2>{index + 1}. {story.title}</h2>
                    <p>{story.score} by {story.by}</p>
                    <p><a href={story.url}>{story.url}</a></p>
                </div>
            ))}
        </div>
    )
    
}

export default HackerNewsTop10;