import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name?.type === "required" && (
          <span className="text-danger">Name is required</span>
        )}
        {errors.name?.type === "minLength" && (
          <span className="text-danger">
            Name must be at least 3 characters
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, min: 0, max: 120 })}
          type="number"
          className="form-control"
          id="age"
        />
        {errors.age?.type === "required" && (
          <span className="text-danger">Age is required</span>
        )}
        {errors.age?.type === "min" && (
          <span className="text-danger">Age must be greater than 0</span>
        )}
        {errors.age?.type === "max" && (
          <span className="text-danger">Age must be between 0 and 120</span>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
