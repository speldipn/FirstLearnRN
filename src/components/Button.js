import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.title === "Hanbit" ? props.theme.blue : props.theme.purple};
  border-radius: 15px;
  padding: 15px 40px;
  margin: 15px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

export default Button;
