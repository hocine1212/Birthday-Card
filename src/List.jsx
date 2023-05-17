const List = ({ people, setPeople }) => {
  const deletePerson = (id) => {
    let newpeople = people.filter((person) => person.id !== id);
    setPeople(newpeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button className="btn" onClick={() => deletePerson(id)}>
              delete
            </button>
          </article>
        );
      })}
    </>
  );
};
export default List;
