import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function returnCities(items: string[]) {
    return (
      <ul className="list-group">
        {items.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Cities found</p> : returnCities(items)}
    </>
  );
}

export default ListGroup;
