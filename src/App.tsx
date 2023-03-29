import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["London", "Florence", "Madrid", "Los Angeles"];
  const countries = ["UK", "Italy", "Spain", "USA"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={countries}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
