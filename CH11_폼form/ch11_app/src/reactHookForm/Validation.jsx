import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

function Validation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  const password = useRef();
  password.current = watch("password");

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <p>This field is required</p>} */}
      <label htmlFor="">
        Email
        <input type="email" name="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <p>this field is required</p>}
      </label>
      <label htmlFor="">
        Name
        <input type="text" name="name" {...register("name", { required: true, minLength: 5, maxLength: 10 })} />
        {errors.name && errors.name.type === "required" && <p>required</p>}
        {errors.name && errors.name.type === "minLength" && <p>over 5</p>}
        {errors.name && errors.name.type === "maxLength" && <p>under 10</p>}
      </label>
      <label htmlFor="">
        Password
        <input type="password" name="password" {...register("password", { required: true, minLength: 8 })} />
        {errors.password && errors.password.type === "required" && <p>required</p>}
        {errors.password && errors.password.type === "minLength" && <p>min 8</p>}
      </label>
      <label htmlFor="">
        Password confirm
        <input type="password" name="password_confirm" {...register("password_confirm", { required: true, validate: (val) => val === password.current })} />
        {/* {watch("password") !== watch("password_confirm") && <p>uncorrect</p>} */}
        {errors.password_confirm && errors.password_confirm.type === "required" && <p>unvalidate</p>}
        {errors.password_confirm && errors.password_confirm.type === "validate" && <p>unvalidate</p>}
      </label>


      <input type="submit" />
    </form>
  );
}

export default Validation;
