// props: 화면에 표시되는 변수, 함수 매개변수처럼 다른 컴포넌트에서 전달받음
// == properties: 렌더링 결괴에 영향을 미치는 자바스크립트객체인데, 함수 매개변수처럼 다른 컴포넌트에서 전달받음
const Header = ({ text }) => {
  return <h1>{text}</h1>
}

export default Header