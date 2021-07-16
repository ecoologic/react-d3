import { Button as MuiButton, ButtonGroup, TextField } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button/Button';
import React, { ChangeEvent, FC, useState } from 'react';
import Graph from '../Graph';
import useStyles from './useStyles';

const Button: FC<ButtonProps> = (props) => {
  return (
    <MuiButton variant="contained" {...props}>
      {props.children}
    </MuiButton>
  );
};

const Form: FC = () => {
  const classes = useStyles();
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
      <ButtonGroup className={classes.padded}>
        <Button title="Push me">Submit</Button>
      </ButtonGroup>
      {values.query}
    </form>
  );
};

const Content: FC = () => {
  return (
    <main className="App__content">
      <Form />
      <Graph />
    </main>
  );
};

export default Content;
