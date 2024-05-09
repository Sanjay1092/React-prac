import { useForm } from "react-hook-form";

const HookForm = () => {
  const inputStyle = "border border-black w-[200px] ";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    reset();
    console.log(data);
  };
  console.log({ ...register("name") });
  console.log({ formState: { errors } });

  return (
    <div className="flex justify-center">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">userName</label>
        <input
          type="text"
          className={inputStyle}
          {...register("name", { required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <p className="text-red-500">Name is required</p>
        )}
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          className={inputStyle}
          {...register("email", {
            required: "Email is required",
          })}
        />
        {/* {errors.email && errors.email.type === "required" && (
          <p className="text-red-500">Email is required</p>
        )} */}
        {errors.email && <p className="text-red-500">error</p>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={inputStyle}
          {...register("password", { required: true })}
          minLength={6}
        />
        {errors.password && errors.password.type === "required" && (
          <p className="text-red-500">Password is required</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default HookForm;
