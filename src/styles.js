import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`;

export const green = "#6E9C47";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  color: #eee;
  background-color: #000;
`;

export const Panel = styled.div`
  text-align: center;
  background-color: #444;
  margin: 30px 0;
  padding: 20px;
`;

export const Results = styled.div`
  margin-top: 70px;
`;

export const H1 = styled.h1`
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  margin-bottom: 40px;
`;

export const H2 = styled.h2`
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
`;

export const IconAndTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const Section = styled.section`
  margin-top: 30px;
  margin-bottom: 60px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  margin: 10px 0;
`;

export const Button = styled.button`
  font-family: "Fjalla One", sans-serif;
  text-transform: uppercase;
  border: none;
  background-color: ${green};
  color: #eee;
  font-size: 15px;
  border-radius: 4px;
  border-bottom: 3px solid #4f773b;
  margin-top: 10px;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  animation-name: ${spin};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  color: orange;
  margin-top: 20px;
`;
