import "./App.css";

const Header = ({ object }) => {
  return (
    <>
      <h1>{object.name}</h1>
    </>
  );
};

const Part = ({ object, i }) => {
  return (
    <>
      <h2>
        Nombre: {object.parts[i].name}, Cantidad de ejercicios:{" "}
        {object.parts[i].exercises}
      </h2>
    </>
  );
};

const Content = ({ object }) => {
  return (
    <>
      <Part object={object} i={0} />
      <Part object={object} i={1} />
      <Part object={object} i={2} />
    </>
  );
};

const Total = ({ object }) => {
  const total =
    object.parts[0].exercises +
    object.parts[1].exercises +
    object.parts[2].exercises;
  return (
    <>
      <h3>Total de ejercicios: {total}</h3>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header object={course} />
      <Content object={course} />
      <Total object={course} />
    </div>
  );
};

export default App;
