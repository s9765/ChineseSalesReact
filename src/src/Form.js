import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName", { required: true })} placeholder="First name" />
      {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
      <input {...register("lastName", { required: true })} placeholder="Last name" />
      {errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>}
      <input  {...register("mail", { required: "Email Address is required" })} pattern={["[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"]} aria-invalid={errors.mail ? "true" : "false"} />
      {errors.mail && <p>invalid text</p>}
      {errors.mail?.pattern && <p>invalid text</p>}
      <input type="number" {...register("phone")} pattern={[]} />
      {errors.phone && <p role="alert">{errors.phone?.message}</p>}
      <input type="submit" />
    </form>
  );
}
  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
  // /^[A-Za-z]+$/i
  // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// export default function Form() {
//     const { register, handleSubmit } = useForm({
//       defaultValues: {
//         firstName: '',
//         lastName: '',
//         category: '',
//         checkbox: [],
//         radio: ''
//       }
//     });

//     return (
//       <form onSubmit={handleSubmit(console.log)}>
//         <input {...register("firstName", { required: true })} placeholder="First name" />

//         <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />

//         <select {...register("category")}>
//           <option value="">Select...</option>
//           <option value="A">Category A</option>
//           <option value="B">Category B</option>
//         </select>

//         <input {...register("checkbox")} type="checkbox" value="A" />
//         <input {...register("checkbox")} type="checkbox" value="B" />
//         <input {...register("checkbox")} type="checkbox" value="C" />

//         <input {...register("radio")} type="radio" value="A" />
//         <input {...register("radio")} type="radio" value="B" />
//         <input {...register("radio")} type="radio" value="C" />

//         <input type="submit" />
//       </form>
//     );
//   }
