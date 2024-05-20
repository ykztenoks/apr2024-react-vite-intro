function capitalizeFirstLetter(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

import catImage from "./assets/cat.jpg";
import Title from "./components/Title";
import Paragraph from "./components/Paragraph";

function App() {
  const student = {
    firstName: "ana",
    lastName: "martinez",
  };

  const { firstName, lastName } = student;
  return (
    <div className="container">
      <h1>Hello, Ironhackers!</h1>

      <h3>
        Hi, {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
        !
      </h3>
      <h3>
        Hi, {firstName.toUpperCase()} {lastName.toUpperCase()}
      </h3>

      <img
        src="https://cdn.britannica.com/92/100692-050-5B69B59B/Mallard.jpg"
        alt="duck image"
      />

      <Title />
      <Paragraph></Paragraph>
      <img src={catImage} alt="cat" />
    </div>
  );
}

export default App;
