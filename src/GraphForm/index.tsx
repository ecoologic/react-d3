import { TextField, ButtonGroup, Grid } from '@material-ui/core';
import Button from '../utils/Button';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { IHasOnSubmit, voidFn } from '../utils/interfaces';

export type IGraphFormFields = 'name' | 'size';
export interface IGraphFormValues {
  name: string;
  size: number;
}

const GraphForm: FC<IHasOnSubmit<IGraphFormValues>> = ({ onSubmit }) => {
  const blankValues = { name: '', size: 1 };
  const [values, setValues] = useState<IGraphFormValues>(blankValues);
  const firstInputRef = useRef<HTMLHeadingElement | null>(null);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({ ...values, [ev.target.id]: ev.target.value }));
  };

  const valid = (field: IGraphFormFields): boolean => {
    const value = values[field];
    const fieldValidator = {
      name: () => !!value,
      size: () => value > 0,
    }[field];
    return fieldValidator();
  };

  const isEnabled = (): boolean => true;
  const reset: voidFn = () => {
    setValues(blankValues);
    firstInputRef?.current?.focus?.();
  };
  const handleSubmit: voidFn = () => {
    onSubmit(values);
    reset();
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item md={10}>
          <TextField
            id="name"
            label="Name"
            value={values.name}
            error={!valid('name')}
            helperText={valid('name') ? '' : `Any value`}
            inputRef={firstInputRef}
            required
            autoFocus
            onChange={onChange}
          />
        </Grid>
        <Grid item md={2}>
          <TextField
            id="size"
            label="Size"
            value={values.size}
            error={!valid('size')}
            helperText={valid('size') ? '' : `A positive value`}
            type="number"
            required
            onChange={onChange}
          />
        </Grid>
        <Grid item md={12}>
          <ButtonGroup fullWidth={true}>
            <Button
              enabled={isEnabled()}
              title="Push me"
              color="primary"
              onClick={handleSubmit}
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
