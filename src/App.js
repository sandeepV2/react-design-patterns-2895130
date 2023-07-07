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

// passing components as props to SplitScreen
// How are you going to handle props if LeftComponent or RightComponent has it. 

// More programmatic apporach would be to pass the components
// as children, and props will be easily handled.

function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={3} >
        <LeftComponent />
        <RightComponent />
      </SplitScreen>
  );
}

export default App;
