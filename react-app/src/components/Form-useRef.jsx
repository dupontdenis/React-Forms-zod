import { useRef } from "react";

const Form = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const pers = { name: "", age: 0 };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value && ageRef.current.value) {
      const formValues = {
        name: nameRef.current.value,
        age: parseInt(ageRef.current.value, 10), 
        // Add other fields here, e.g., email: emailRef.current.value
        // Add validation here, e.g., if (emailRef.current.value.includes("@"))
      };

      // Update pers object with formValues using spread operator
      Object.assign(pers, formValues);

      console.log(pers);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form_label">
          Age
        </label>
        <input ref={ageRef} type="number" className="form-control" id="age" />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
