import React, { useState } from 'react';
import TodoList from './components/TodoList';


TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        //Clone current array to the new one
        const newTodoList = [...todoList];
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }

        newTodoList[idx] = newTodo;
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        setFilterStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilterStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === 'all'
        || filterStatus === todo.status);
    console.log(renderedTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;