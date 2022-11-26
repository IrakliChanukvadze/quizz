import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import "./FormData.css";
function FormData({ formData, formDataChange }) {
  return (
    <div className="form">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="category">category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          label="category"
          onChange={formDataChange}
          name="category"
        >
          <MenuItem value="">
            <em>Any category</em>
          </MenuItem>
          <MenuItem value={10}>Book</MenuItem>
          <MenuItem value={11}>Film</MenuItem>
          <MenuItem value={12}>Music</MenuItem>
          <MenuItem value={18}>Science: Computers</MenuItem>
          <MenuItem value={21}>Sports</MenuItem>
          <MenuItem value={24}>Politics</MenuItem>
          <MenuItem value={22}>Geography</MenuItem>
          <MenuItem value={27}>Animals</MenuItem>
          <MenuItem value={23}>History</MenuItem>
          <MenuItem value={25}>Art</MenuItem>
          <MenuItem value={20}>Mythology</MenuItem>
          <MenuItem value={15}>Video Games</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="difficulty">difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          id="difficulty"
          label="difficulty"
          onChange={formDataChange}
          name="difficulty"
        >
          <MenuItem value="">
            <em>Any Difficulty</em>
          </MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="type">type</InputLabel>
        <Select
          labelId="type-label"
          id="type"
          label="type"
          onChange={formDataChange}
          name="type"
        >
          <MenuItem value="type">
            <em>Any type</em>
          </MenuItem>
          <MenuItem value="multiple">Multiple</MenuItem>
          <MenuItem value="boolean">True/false</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FormData;
/**
 * 
 * <label htmlFor="difficulty">Choose Difficulty?</label>
      <br />
      <select
        id="difficulty"
        value={formData.category}
        onChange={formDataChange}
        name="difficulty"
      >
        <option value="">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <label htmlFor="type">Choose Type?</label>
      <br />
      <select
        id="type"
        value={formData.category}
        onChange={formDataChange}
        name="type"
      >
        <option value="">Any type</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True / false</option>
      </select>
 */
