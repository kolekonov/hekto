import { useParams } from "react-router-dom";


const Page = () => {
    console.log(useParams());
    return (
        <>
        <div>page1</div>
        </>
    );
}

export {Page};