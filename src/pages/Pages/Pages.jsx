import {useParams} from 'react-router-dom';

const Pages = () => {


    const params = useParams();
    console.log(params);

    return (
        <div>Pages</div>
    );
};

export {Pages};