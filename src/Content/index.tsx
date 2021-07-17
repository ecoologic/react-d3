import { Grid } from '@material-ui/core';
import { FC } from 'react';
import Graph from '../Graph';
import GraphForm from '../GraphForm';
import { IonSubmit } from '../interfaces';

const Content: FC = () => {
  const onSubmit: IonSubmit = (values) => {
    console.log(` values`, values);
    alert(JSON.stringify(values));
  };

  return (
    <main className="App__content">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <GraphForm onSubmit={onSubmit} />
        </Grid>
        <Grid item md={6}>
          <Graph />
        </Grid>
      </Grid>
    </main>
  );
};

export default Content;
