import { Button as MuiButton, ButtonGroup, TextField } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button/Button';
import React, { ChangeEvent, FC, useState } from 'react';
import Graph from '../Graph';
import { IHasOnSubmit, IonSubmit } from '../interfaces';
import useStyles from './useStyles';

// TODO: variant="contained" color="secondary" works??
const Button: FC<ButtonProps & { enabled?: boolean }> = ({
  enabled = true,
  disabled,
  children,
  ...otherProps
}) => {
  return (
    <MuiButton disabled={!enabled} {...otherProps}>
      {children}
    </MuiButton>
  );
};

const GraphForm: FC<IHasOnSubmit> = ({ onSubmit }) => {
  const classes = useStyles();
  const [values, setValues] = useState<Record<string, string>>({});
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(`old values`, values);
    setValues((values) => ({ ...values, [ev.target.id]: ev.target.value }));
  };
  return (
    <form>
      <TextField
        id="name"
        label="Name"
        type="text"
        required
        autoFocus
        onChange={onChange}
        className={classes.paddingLeft}
      />
      <TextField
        id="size"
        label="Size"
        type="number"
        required
        onChange={onChange}
        className={classes.paddingLeft}
      />
      <ButtonGroup className={classes.padding}>
        <Button title="Push me" onClick={() => onSubmit(values)}>
          Submit
        </Button>
      </ButtonGroup>
      {values.query}
    </form>
  );
};

const Content: FC = () => {
  const onSubmit: IonSubmit = (values) => {
    console.log(` values`, values);
    alert(JSON.stringify(values));
  };

  return (
    <main className="App__content">
      <GraphForm onSubmit={onSubmit} />
      <Graph />
    </main>
  );
};

export default Content;
