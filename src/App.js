import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Text = styled.span`
  font-size: 50px;
  color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.theme.backgroundColor};
  ${Text} {
    &:hover {
      font-size: 50px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <Text>hi</Text>
      </Box>
      <Text>hello</Text>
    </Father>
  );
}

export default App;
