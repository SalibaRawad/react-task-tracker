import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  //state is immutable so we cannot write tasks.push but rather use setTask (e.g setTask(...tasks,{add new object here}))
  //if we want to use this state in another component we use context api or redux or make the state global like we did in App.js

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete}></Task>
      ))}
    </>
  );
};

export default Tasks;
