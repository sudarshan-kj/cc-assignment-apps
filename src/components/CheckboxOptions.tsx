import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  accordionClasses,
} from "@mui/material";
import { useState } from "react";

type CheckboxOptionsProps = {
  options: any;
  handleChange: any;
};

const CheckboxOptions = ({ options, handleChange }: CheckboxOptionsProps) => {
  console.log("Options are", options);
  return (
    <FormGroup>
      {options.map((option: any) => (
        <FormControlLabel
          key={option.option}
          name={option.option}
          onChange={handleChange}
          control={<Checkbox checked={option.value || false} />}
          label={option.option}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxOptions;
