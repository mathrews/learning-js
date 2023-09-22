import { useState, useEffect } from "react"

const Effect = () => {
    const [resourceType, setResourceType] = useState("posts");

    const [resourceInfos, setResourceInfos] = useState()

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }, [resourceType]) //nisso, ele espera o resource type *MUDAR*. Ou seja, eu clicar em um botão mais de uma vez, ele não vai fodar o useEffect de novo pois a dependência não mudou;

    // usando async await:
    useEffect(() => {
        const fetchResourceTypes = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const responseJson = await response.json()

            console.log(responseJson);
            await setResourceInfos(responseJson)
        }
        fetchResourceTypes();
    }, [resourceType]) 

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType)
    };

    return (
        <>
            <div>
                <h1>{resourceType}</h1>
                <div style={{ display:"flex", alignItems:"center" }}>
                    <button onClick={() => changeResourceType("posts")}>Posts</button>
                    <button onClick={() => changeResourceType("comments")}>comments</button>
                    <button onClick={() => changeResourceType("todos")}>todos</button>
                </div>
            </div>

            <ul>
                {resourceInfos.map((item) => <li key={item.id}>{item.title}</li>)}
            </ul>

                   
        </>
    )
}

export default Effect