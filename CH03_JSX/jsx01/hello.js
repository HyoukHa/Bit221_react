// class Hello extends React.Component {
//   render() {
//     return <h1>hello {this.props.nickname}</h1>;
//   }
// }

const Hello = ({nickname}) => {
  return <h1>hello {nickname}</h1>;
};

ReactDOM.render(<Hello nickname="땡주" />, document.getElementById("root"));
