import { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("mnm", value);
  };
  return (
    <div className="w-full ml-20">
      <h2>SignUp</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col ">
          <label>Name</label>
          <input
            type="text"
            className="border border-black w-[200px] "
            value={value.name}
            name="name"
            onChange={handleInputChange}
          />
          <label>E-mail</label>
          <input
            type="email"
            className="border border-black w-[200px]"
            value={value.email}
            name="email"
            onChange={handleInputChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="border border-black w-[200px]"
            onChange={handleInputChange}
            value={value.password}
          />
        </div>
        <button type="submit" className="w-fit bg-sky-500 mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
