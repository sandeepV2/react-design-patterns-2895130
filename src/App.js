import { SplitScreen } from "./splitScreen"


const LeftComponent = ({name}) => {

    return <div style={{ backgroundColor: 'green'}}>
      <h1 >{name}</h1>;
    </div>
}

const RightComponent = (message) => {
  // props without deconstruction
  return <div style={{ backgroundColor: 'red'}}>
    <h1>{message.message}</h1>
  </div>;
}

// passing components as props to SplitScreen
// How are you going to handle props if LeftComponent or RightComponent has it. 

// More programmatic apporach would be to pass the components
// as children, and props will be easily handled.

function App() {
  return (
      <SplitScreen leftWeight={1} rightWeight={3} >
        <LeftComponent name="Sandeep"/>
        <RightComponent message="Designing like pro"/>
      </SplitScreen>
  );
}

export default App;
