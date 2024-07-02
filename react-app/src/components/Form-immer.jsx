import { useState } from "react";
import { produce } from "immer";

const Form = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!person.name || !person.age) {
      return;
    }
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          {person.name ? "Name" : "Name is required"}
        </label>
        <input
          onChange={(e) =>
            setPerson(
              produce(person,(draft) => {
                draft.name = e.target.value;
              })
            )
          }
          type="text"
          className="form-control"
          id="name"
          value={person.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          {person.age ? "Age" : "Age is required"}
        </label>
        <input
          onChange={(e) =>
            setPerson(
              produce(person, (draft) => {
                draft.age = e.target.value;
              })
            )
          }
          type="number"
          className="form-control"
          id="age"
          value={person.age}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
