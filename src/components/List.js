import React from "react";
import { List, ListItemText, Avatar, ListItemAvatar, ListItem, Button } from "@material-ui/core";
import { WorkOutline, Delete } from "@material-ui/icons";
import styled from "styled-components";
import { useMutation } from "urql";
import { UpdateTodo, DeleteTodo } from "../queries/Todo";

const StyledAvatar = styled(Avatar)`
  background-color: ${({ completed }) => (completed === "true" ? "#4caf50" : "#dc004e")};
`;

const ListRen = ({ data }) => {
  const [updateTodoresult, updateTodo] = useMutation(UpdateTodo);
  const [deleteTodoResult, deleteTodo] = useMutation(DeleteTodo);

  const handleUpdate = (id, completed) => {
    const variables = {
      patch: {
        filter: {
          id: id,
        },
        set: {
          completed: !completed,
        },
      },
    };
    updateTodo(variables).then((result) => {
      if (result.error) {
        console.log(result);
      }
    });
  };

  const handleDelete = (id) => {
    const variables = { filter: { id } };
    deleteTodo(variables).then((result) => {
      if (result.error) {
        console.log(result);
      }
    });
  };

  return (
    <List>
      {data.queryTask.map((el) => (
        <ListItem key={el.id}>
          <ListItemAvatar onClick={() => handleUpdate(el.id, el.completed)}>
            <StyledAvatar completed={el.completed.toString()}>
              <WorkOutline />
            </StyledAvatar>
          </ListItemAvatar>
          <ListItemText primary={el.title} secondary={el.completed ? "Done" : "Pending"} />
          <Button variant='contained' color='secondary' startIcon={<Delete />} onClick={() => handleDelete(el.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ListRen;
