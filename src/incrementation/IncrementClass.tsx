import React, {Component} from "react";

export default class IncrementClass extends Component<any>{

    state = {
        value :0
    };

        render() {
            return (
                <>
                    <button className="btn btn-danger"
                        onClick={()=>this.setState({
                            value : this.state.value+=1
                        })}> Increment </button>
                    <button className="btn btn-danger"
                            onClick={()=>this.setState({
                                value : this.state.value -=1
                            })}> Decrement</button>
                    <button className="btn btn-danger"
                            onClick={()=>this.setState({
                                value : this.state.value = 0
                            })}> Reset to 0</button>
                <p>{this.state.value}</p>
            </>
            );
        }
}