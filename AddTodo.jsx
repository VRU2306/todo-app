import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid'

function AddTodo({ submitTodo }) {
    let [title, setTitle] = useState("")

    return <form onSubmit={e => {
        e.preventDefault()
        setTitle("")
        submitTodo({ title, uuid: v4() })
    }}>
        <label>Add todo</label>
        <input id="add-todo" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="submit" value="submit" />
    </form>
}

export default AddTodo