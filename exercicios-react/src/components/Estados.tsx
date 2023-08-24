import { Tweet } from "./Tweet";
import { useState } from "react";


export function Estados() {
    
    const [listaDeTweets, setTweets] = useState<string[]>([
        'Tweet 1',
        'Tweet 2',
        'Tweet 3',
        'Tweet 4'
    ])

    function criarTweet() {
        setTweets([...listaDeTweets, 'Tweet 5']);
    }
    
    return (
        <>
            {listaDeTweets.map(tweet => {
                return <Tweet text={tweet}/>
            })}
            <button onClick={criarTweet}>Adicionar Tweet</button>
        </>
    )
}