import { Grid } from '@material-ui/core';
import { FC, useState } from 'react';
import Graph, { INode } from '../Graph';
import GraphForm, { IGraphFormValues } from '../GraphForm';
import { IonSubmit } from '../utils/interfaces';

const Content: FC = () => {
  const [values, setValues] = useState<IGraphFormValues[]>([]);
  const onSubmit: IonSubmit<IGraphFormValues> = (values) => {
    setValues((prevValues) => [...prevValues, values]);
  };

  const nodes: INode[] = values.map(({ size }) => ({ id: size, index: size }));

  return (
    <main className="App__content">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <GraphForm onSubmit={onSubmit} />
        </Grid>
        <Grid item md={6}>
          <Graph nodes={nodes} />
        </Grid>
      </Grid>
    </main>
  );
};

export default Content;
