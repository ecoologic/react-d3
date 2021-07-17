import {
  Button as MuiButton,
  ButtonGroup,
  Grid,
  TextField,
} from '@material-ui/core';
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

type IGraphFormFields = 'name' | 'size';
interface IGraphFormValues {
  name: string;
  size: number;
}

const GraphForm: FC<IHasOnSubmit> = ({ onSubmit }) => {
  const classes = useStyles();
  const blankValues = { name: '', size: 0 };
  const [values, setValues] = useState<IGraphFormValues>(blankValues);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(`old values`, values);
    setValues((values) => ({ ...values, [ev.target.id]: ev.target.value }));
  };

  const valid = (field: IGraphFormFields): boolean => {
    const value = values[field];
    const fieldValidator = {
      name: () => !!value,
      size: () => value > 0,
    }[field];
    console.log(`valid ${field} `, fieldValidator, fieldValidator());
    return fieldValidator();
  };

  const isEnabled = (): boolean => true;

  // TODO: can we use onSubmit in the form?
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item md={10}>
          <TextField
            id="name"
            label="Name"
            type="text"
            required
            autoFocus
            fullWidth={true}
            onChange={onChange}
            error={!valid('name')}
            helperText={valid('name') ? 'Must be present' : ''}
          />
        </Grid>
        <Grid item md={2}>
          <TextField
            id="size"
            label="Size"
            type="number"
            required
            onChange={onChange}
            fullWidth={true}
            error={!valid('size')}
            helperText={valid('size') ? 'A positive value' : ''}
          />
        </Grid>
        <Grid item md={12}>
          <ButtonGroup fullWidth={true}>
            <Button
              enabled={isEnabled()}
              title="Push me"
              onClick={() => onSubmit<IGraphFormValues>(values)}
              fullWidth={true}
            >
              Submit
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
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
