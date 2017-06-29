const allThings = ( things ) => Object.keys(things).map(id => things[id]);


export default allThings;



// export const singleTodo = ( todos ) => Object.keys(todos).map(id => todos[id]);


// export const stepsByTodoId = ({ steps }, todo_id) => {
//   const stepsByTodoId = [];
//   Object.keys(steps).forEach(stepId => {
//     const step = steps[stepId];
//     if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step)
//   })
//   return stepsByTodoId;
// };