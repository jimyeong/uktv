import React, { useState } from "react";
import styled from "styled-components";
import { INPUTS, BUTTONS } from "..";
import { useInput } from "../../hooks/useInput";

const SearchBarBlock = styled.div`
  position: relative;
  padding-right: 120px;
  > input {
  }
  > button {
    width: 100px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border: none;
  }
`;

const initialState = { keyword: "" };
function SearchBar({ children, callback, inputId }) {
  const [inputValues, onReset, onChange] = useInput(initialState);
  const onClick = () => {
    onReset();
    if (callback) callback(inputValues.keyword);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onReset();
      if (callback) callback(inputValues.keyword);
    }
  };
  return (
    <SearchBarBlock>
      <INPUTS.TEXT_INPUT
        name={inputId}
        value={inputValues.keyword}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <BUTTONS.BASE_BUTTON onClick={onClick}>GO!</BUTTONS.BASE_BUTTON>
    </SearchBarBlock>
  );
}

export default React.memo(SearchBar);
