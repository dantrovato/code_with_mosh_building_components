import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["London", "Florence", "Madrid", "Los Angeles"];
  const countries = ["UK", "Italy", "Spain", "USA"];
  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      <ListGroup items={countries} heading="Countries" />
    </div>
  );
}

export default App;
