import { Button, TextField } from '@material-ui/core';
import React, { ChangeEvent, useState } from 'react';
import Graph from '../Graph';

const Form = () => {
  const [values, setValues] = useState<Record<string, string>>({});
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({ ...values, [ev.target.id]: ev.target.value }));
  };
  return (
    <form>
      <TextField
        id="query"
        label="Standard"
        required
        autoFocus
        onChange={onChange}
      />
      <Button title="Push me">Submit</Button>
      {values.query}
    </form>
  );
};

const Content = (): JSX.Element => {
  return (
    <main className="App__content">
      <Form />
      <Graph />
    </main>
  );
};

export default Content;
