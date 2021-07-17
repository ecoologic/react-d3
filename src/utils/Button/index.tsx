import { Button as MuiButton } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button/Button';
import { FC } from 'react';

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

export default Button;
