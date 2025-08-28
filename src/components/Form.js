import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {

    const schema = yup.object().shape({
        name : yup.string().required("your name is required"),
        email : yup.string().required("your email is required"),
        age : yup.number().integer().positive().required("your age is required"),
        password :yup.string().min(4 ,"Password must be at least 4 characters").max(10,"Password cannot exceed 10 characters").required("Password is required"),
        confirmPassword : yup.string().oneOf([yup.ref("password"),null],"passwords dont match").required("Confirm password is required")
    })


    const { register , handleSubmit ,formState:{errors}} = useForm({
        resolver : yupResolver(schema)
    });

    const onSubmit = (data)=>{
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name")} />
      <p>{errors.name?.message}</p>
      <input type="text" placeholder="email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="confirm password" {...register("confirmPassword")} />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit"/>
    </form>
  );
};