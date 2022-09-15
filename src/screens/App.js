import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import EventInput from "../components/EventInput";
import MyButton from "../components/MyButton";
import { Header, Body, Footer } from "../components/Layout";
import ShadowBox from "../components/ShadowBox";
import styled, { css, ThemeProvider } from "styled-components/native";
import Button from "../components/Button";
import Input from "../components/Input";
import { lightTheme, darkTheme } from "../styles/theme";

const MyTextComponent = styled.Text`
  color: #fff;
`;

const whiteText = css`
  color: #fff;
  font-size: 50px;
`;

const MyBoldTextComponent = styled.Text`
  ${whiteText}
  font-weight: 600;
`;

const MyLightTextComponent = styled.Text`
  ${whiteText}
  font-weight: 200;
`;

const StyledText = styled.Text`
  color: #000;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
`;

const ErrorText = styled(StyledText)`
  font-weight: 600;
  color: red;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const Container2 = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const _toogleSwtich = () => setIsDark(!isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toogleSwtich} />
        {/* <ShadowBox /> */}
        {/* <MyTextComponent style={whiteText}>Test</MyTextComponent>
      <MyBoldTextComponent>Bold Text</MyBoldTextComponent>
      <MyLightTextComponent>Light Text</MyLightTextComponent>
      <StyledText>Styled Text</StyledText>
      <ErrorText>Styled Text</ErrorText> */}
        <Button title="Hanbit" />
        <Button title="React Native" />
        <Input borderColor="#3487db" />
        <Input borderColor="#9b58b6" />
      </Container>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
