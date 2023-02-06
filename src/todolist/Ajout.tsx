import React, {useState} from "react";

export default function AddTask(props: { addTask: (arg0: string) => void;}){
    const [text, setText] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        props.addTask(text);
        setText("");
    };
    return(
        <div className="row">
            <form className="forme" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-group-text"
                    placeholder="Ajouter une tâche"
                    value={text}
                    onClick={handleSubmit}
                    onChange={(e) => setText(e.target.value)}
                    data-testid="toggle"
                />
            </form>
        </div>
    )
}