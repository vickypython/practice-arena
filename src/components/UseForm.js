import React from "react";
import { useForm } from "react-hook-form";
const UseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "test@gmail.com",
    },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "email required",
          pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
        })}
        type="email"
        placeholder="email"
      />
      {errors.email && <div>{errors.email.message}</div>}
      <input
        {...register("password", {
          required: true,
          minLength: 8,
        })}
        type="password"
        placeholder="password"
      />
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "submit"}
      </button>
    </form>
  );
};

export default UseForm;
