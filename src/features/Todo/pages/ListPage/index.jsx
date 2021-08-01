import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    //Clone current array to the new one
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus('all');
    const queryParms = { status: 'all' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParms),
    });
  };

  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
    const queryParms = { status: 'completed' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParms),
    });
  };

  const handleShowNewClick = () => {
    setFilterStatus('new');
    const queryParms = { status: 'new' };
    history.push({
      pathName: match.path,
      search: queryString.stringify(queryParms),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  }, [todoList, filterStatus]);

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

export default ListPage;
