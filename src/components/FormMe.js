import React from "react";
import { useForm } from "react-hook-form";

const onSubmit = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(data);
};
const FormMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "testa@mm.com",
      password: 123,
    },
  });




  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: "email reguired",
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          })}
          type="email"
          placeholder="Enter email"
        />
        {errors.email && <div>{errors.message}</div>}
      </form>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "loading" : "submit"}
      </button>
    </>
  );
};

export default FormMe;
