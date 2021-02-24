import React from "react";
import { useQuery } from "urql";
import { Container, Grid } from "@material-ui/core";
import { TodosQuery } from "./queries/Todo";
import List from "./components/List";
import InputEl from "./components/InputEl";

function App() {
  const [result] = useQuery({
    query: TodosQuery,
  });

  const { data, fetching, error } = result;

  let layout = null;
  if (fetching) layout = <p>Loading Data...</p>;

  if (error) layout = <p>Can't fetch data...</p>;

  if (data) layout = <List data={data} />;

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {layout}
        </Grid>
        <Grid item xs={12} md={6} style={{ alignSelf: "center" }}>
          <InputEl />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
