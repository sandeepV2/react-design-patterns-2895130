import { SplitScreen } from "./splitScreen"


const LeftComponent = () => {

    return <div style={{ backgroundColor: 'green'}}>
      <h1 >Left</h1>;
    </div>
}

const RightComponent = () => {
  return <div style={{ backgroundColor: 'red'}}>
    <h1>Right</h1>
  </div>;
}

function App() {
  return (
      <SplitScreen left={LeftComponent} 
      right={RightComponent}
      leftWeight={1}
      rightWeight={3} />
  );
}

export default App;
