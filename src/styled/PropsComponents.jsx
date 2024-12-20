import styled from "styled-components";

// 컴포넌트의 prop으로 전달된 속성들을 이용해서, 동적 스타일링이 가능

const Button = styled.button`
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => (props.dark ? "black" : "white")};
`;

function PropsComponents() {
  return (
    <div>
      <Button>일반버튼</Button>
      <Button dark>Dark 버튼</Button>
    </div>
  );
}

export default PropsComponents;
