import React, { useState, useEffect } from 'react'

export default function TodoList() {
    //Stores all the tasks - now retrieving from localStorage on initial load
    const [tasks, setTasks] = useState(() => {
        // Get stored tasks from localStorage or default to empty array
        const savedTasks = localStorage.getItem('tasks')
        return savedTasks ? JSON.parse(savedTasks) : []
    })

    //Stores the new task that is about to be added
    const [newTask, setNewTask] = useState("")

    //Stores the index of the task about to be edited
    const [editIndex, setEditIndex] = useState(null)

    //Stores the already present text of the task about to be edited
    const [editText, setEditText] = useState("")

    // Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function handleEditChange(e) {
        setEditText(e.target.value)
    }

    //Adding a new task and marking it as not completed
    function addTask() {
        if (newTask.trim()!=="") {
            setTasks(oldTask => [...oldTask, { text: newTask, completed: false }])
            setNewTask("")
        }
    }

    //Deleting a task
    function deleteTask(ind) {
        //Filter out all the tasks not having the index==ind
        const updatedTask = tasks.filter((element, index) => index !== ind)
        setTasks(updatedTask)
    }

    function startEditing(index) {
        setEditIndex(index)
        setEditText(tasks[index].text)
    }

    function saveEdit() {
        if(editText.trim()!==""){
            const updatedTasks = [...tasks]
            updatedTasks[editIndex].text = editText
            setTasks(updatedTasks)
            setEditIndex(null)
            setEditText("")
        }
    }

    function cancelEdit() {
        setEditIndex(null)
    }

    //Marking Task Completed
    function toggleComplete(index) {
        const updatedTasks = [...tasks]
        updatedTasks[index].completed = !updatedTasks[index].completed
        setTasks(updatedTasks)
    }

    //Moving Tasks Up
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...tasks]
            const temp = updatedTask[index - 1]
            updatedTask[index - 1] = updatedTask[index]
            updatedTask[index] = temp
            setTasks(updatedTask)
        }
    }

    //Moving Tasks Down
    function moveTaskDown(index) {
        const len = tasks.length;
        if (index < len - 1) {
            const updatedTask = [...tasks]
            const temp = updatedTask[index + 1]
            updatedTask[index + 1] = updatedTask[index]
            updatedTask[index] = temp
            setTasks(updatedTask)
        }
    }

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <div className="">
                <input 
                    type="text" 
                    placeholder='Enter A Task'
                    value={newTask} 
                    onChange={handleInputChange}
                />
                <button className='add-button' onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        {editIndex === index ? (
                            //Edit Container 
                            <div>
                                <input type="text" value={editText} onChange={handleEditChange}/>
                                <button onClick={saveEdit}>Save</button>
                                <button onClick={cancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                {/*Printing The Current Task*/}
                                <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                                    {task.text}
                                </span>

                                {/*Mark Task Complete Button*/}
                                <button className='complete-button' onClick={() => toggleComplete(index)}>
                                    {task.completed ? '↩️' : '✓'}
                                </button>

                                {/*Edit The Current Task*/}
                                <button  className='edit-button' onClick={() => startEditing(index)}>
                                    Edit
                                </button>

                                {/*Delete The Current Task*/}
                                <button className='delete-button' onClick={() => deleteTask(index)}>
                                    Delete
                                </button>

                                {/*Move The Task Up Button*/}
                                <button className='move-button' onClick={() => moveTaskUp(index)}>
                                    ⬆️
                                </button>

                                {/*Move The Task Down*/}
                                <button className='move-button' onClick={() => moveTaskDown(index)}>
                                    ⬇️
                                </button>
                            </>
                        )}
                    </li>
                )}
            </ol>
        </div>
    )
}