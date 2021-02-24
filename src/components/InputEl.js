import React, { useState } from "react";
import { TextField, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useMutation } from "urql";
import { AddTodo } from "../queries/Todo";

const InputEl = () => {
  const [__, addTodo] = useMutation(AddTodo);
  const [input, setInput] = useState("");
  const variables = { title: input || "" };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(variables).then((result) => {
      setInput("");
    });
  };

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        style={{ marginRight: "10px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Fab color='primary' aria-label='add' type='submit'>
        <AddIcon />
      </Fab>
    </form>
  );
};

export default InputEl;
