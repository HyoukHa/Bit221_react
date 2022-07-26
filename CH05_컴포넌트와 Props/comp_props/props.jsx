/**
 * 컴포넌트 입력(props)
 *
 * 자바스크립트 객체 {}
 */

const App = () => {
  return (
    <div>
      <Profile name="Tom" intro="Hello" hit={100} />
    </div>
  );
};

const Profile = ({name, intro, hit}) => {
  return (
    <div>
      <h2>{name}의 블로그입니다.</h2>
      <p>{intro}</p>
      <hr />
      <hr />
      <p>{hit}</p>
    </div>
  );
};
