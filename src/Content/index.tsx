import { Grid } from '@material-ui/core';
import { FC, useState } from 'react';
import Graph from '../Graph';
import GraphForm from '../GraphForm';
import { IonSubmit } from '../utils/interfaces';

const Content: FC = () => {
  const [values, setValues] = useState<object>({});
  const onSubmit: IonSubmit<object> = (values) => {
    setValues(values);
    console.log(` values`, values);
    alert(JSON.stringify(values));
  };

  // TODO: fix test config (damn d3)
  // TODO: boxes responsiveness!!!!
  // TODO: or d3?

  return (
    <main className="App__content">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <GraphForm onSubmit={onSubmit} />
        </Grid>
        <Grid item md={6}>
          <Graph />
          {JSON.stringify(values)}
        </Grid>
      </Grid>
    </main>
  );
};

export default Content;
