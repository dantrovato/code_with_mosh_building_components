import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  const handleDismiss = () => {
    setClicked(false);
  };

  const message = "You should check in on some of those fields below.";
  return (
    <div>
      {clicked ? (
        <Alert handleDismiss={handleDismiss}>
          <strong>Holy guacamole!</strong> {message}
        </Alert>
      ) : undefined}
      <Button handleClick={handleClick}>Me Button</Button>
    </div>
  );
}

export default App;
