import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div className="align-middle font-sans">
            <h1>Oopss!! Something Went Wrong</h1>
            <h2>It's not you, it's us!</h2>
            <h3>Error {err.status} : {err.statusText}</h3>
        </div>
    );
};

export default Error;