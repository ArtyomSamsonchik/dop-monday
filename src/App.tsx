import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

type getType = {
    userId: number
    id: number
    title: string
    body: string
}

export function App() {
    const [get, setGet] = useState<Array<getType>>([]);

    const getRequestHandler = () => {
        setGet([]);
    };

    //sfsfasdjlf;adfadfaf
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json));
    }, []);

    return (
        <div className="App">
            <Button nickName={"CleanPage"} callback={getRequestHandler}/>
            <p></p>
            <ul>
                {get.map(el => {
                    return (
                        <li key={el.id}>
                            <h4>{el.userId}</h4>
                            <p>{el.userId}</p>
                            <p>{el.title}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
