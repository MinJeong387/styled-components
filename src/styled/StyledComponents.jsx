import styled from "styled-components";

// 새 컴포넌트 생성
const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;
const Title = styled.h1`
  color: white;
  font-size: 1.5em;
  text-align: center;
`;

function StyledComponents() {
  return (
    <Wrapper>
      <Title>Styled Components</Title>
    </Wrapper>
  );
}

export default StyledComponents;
