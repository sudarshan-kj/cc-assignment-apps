import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

type RadioOptionsProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioOptions = ({ value, handleChange }: RadioOptionsProps) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="optionA"
          control={<Radio />}
          label="Option A"
        />
        <FormControlLabel
          value="optionB"
          control={<Radio />}
          label="Option B"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioOptions;
