import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

const StyledInput = styled.TextInput`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
`;

const AttrInput = styled(StyledInput).attrs((props) => ({
  placeholder: "Enter a text...",
  placeholderTextColor: props.borderColor,
}))`
  font-size: 20px;
  border-color: ${(props) => props.borderColor};
`;

const Input = (props) => {
  return <AttrInput borderColor={props.borderColor} />;
};

export default Input;
