import React, {useState} from "react";

const Counting = () =>{

    const [count,setCount] = useState(0);

    const click = (e :any) => {
        e.preventDefault();
        setCount(count+1);
    }
    const declick = (e :any) => {
        e.preventDefault();
        setCount(count -1);
    }
    return(
        <form className="form-control">
            <button className="btn btn-danger"
                    onClick={(e)=>click(e)}> Increment</button>
            <button className="btn btn-danger"
                    onClick={(e)=>declick(e)}> Decrement</button>
            <button className="btn btn-danger"
                    onClick={(e)=> {
                        e.preventDefault();
                        setCount(0)
                    }}> Reset to 0</button>
            <p>{count}</p>
        </form>
    )
}

export default Counting;