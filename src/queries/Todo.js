export const TodosQuery = `
query MyQuery {
  queryTask{
    id
    title
    completed
    user{
      name
      username
    }
  }
}
`;

export const AddTodo = `
mutation MyMutation($title: String!) {
  addTask(input: 
    {title: $title, completed: false, 
      user: 
      {name: "Alice",username: "alice@dgraph.io"}}){
    task{
      id
      title
      completed
      user{
        name
        username
      }
    }
  }
}
`;

export const UpdateTodo = `
mutation MyMutation($patch: UpdateTaskInput!) {
  updateTask(input: $patch) {
    task {
      id
      title
      completed
      user{
        name
        username
      }
    }
  }
}
`;

export const DeleteTodo = `
mutation MyMutation($filter: TaskFilter!) {
  deleteTask(filter: $filter){
    task{
      id
      title
    }
  }
}
`;
