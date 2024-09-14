
const Header = ({ object, i }) => {
  return (
    <>
      <h1>{object[i].name}</h1>
    </>
  );
};

const Part = ({ coursePart }) => {

  return (
    <>
      <h2>
        Nombre: {coursePart.name}, Cantidad de ejercicios:{" "}
        {coursePart.exercises}
      </h2>
    </>
  );
};

const Content = ({ object, i }) => {
  return (
    <>
      {object[i].parts.map(coursePart =>
        <Part key={coursePart.id} coursePart={coursePart}></Part>
      )}
    </>
  );
};

const Total = ({ object, i }) => {

  const initialValue = 0;
  const total = object[i].parts.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue.exercises
  }, initialValue);

  return (
    <>
      <h3>Total de ejercicios: {total}</h3>
    </>
  );
};

const Course = ({ object, i }) => {

  return (
    <div>
      <Header object={object} i={0} />
      <Content object={object} i={0} />
      <Total object={object} i={0} />
      <Header object={object} i={1}></Header>
      <Content object={object} i={1} />
      <Total object={object} i={1} />
    </div>
  );

}

export default Course