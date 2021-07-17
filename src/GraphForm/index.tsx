import { TextField, ButtonGroup, Grid } from '@material-ui/core';
import Button from '../utils/Button';
import { ChangeEvent, FC, useState } from 'react';
import { IHasOnSubmit } from '../utils/interfaces';

export type IGraphFormFields = 'name' | 'size';
export interface IGraphFormValues {
  name: string;
  size: number;
}

const GraphForm: FC<IHasOnSubmit<IGraphFormValues>> = ({ onSubmit }) => {
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
            required
            autoFocus
            onChange={onChange}
            error={!valid('name')}
            helperText={valid('name') ? '' : `Any value`}
          />
        </Grid>
        <Grid item md={2}>
          <TextField
            id="size"
            label="Size"
            type="number"
            required
            onChange={onChange}
            error={!valid('size')}
            helperText={valid('size') ? '' : `A positive value`}
          />
        </Grid>
        <Grid item md={12}>
          <ButtonGroup fullWidth={true}>
            <Button
              enabled={isEnabled()}
              title="Push me"
              onClick={() => onSubmit(values)}
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

export default GraphForm;
