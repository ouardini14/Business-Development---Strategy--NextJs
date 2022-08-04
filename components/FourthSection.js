import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function FourthSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const [loading, SetLoading] = useState(false);

  async function onSubmitForm(values) {
    SetLoading(true);

    await axios
      .post("/api/email", { values })
      .then((res) => {
       SetLoading(false);
        reset();
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((e) => {
        SetLoading(false);
        console.log(e);
      });
  }

  return (
    <div className="py-12 w-screen  px-4 sm:px-5  lg:px-28">
      <div className="flex flex-col   items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="font-Helvetica flex flex-col  px-8 space-y-3 pt-10 md:pt-0 lg:min-w-[50vw] "
        >
          <h1 className='font-AvenirHeavy tracking-tighter text-4xl pb-3 text-center'>Contattaci se hai bisogno di più info</h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0 justify-center space-y-3  pt-5 ">
            <label className="flex flex-col space-y-2">
              <span>Nome</span>
              <input
                {...register("fname", {
                  required: {
                    value: true,
                    message: "You must enter your First name",
                  },
                })}
                className={` border-white  focus:border-0 focus:border-b-[3px]  focus:border-black border-b-[3px] border-[3px] border-b-black  focus:ring-0   ${errors.fname ? "border-b-red-500" : null}`}
                name="fname"
                type="text"
              />
              <span className="text-red-400 text-sm py-2">
                {errors?.fname?.message}
              </span>
            </label>

            <label className="flex flex-col space-y-2">
              <span>Cognome</span>
              <input
                {...register("lname", {
                  required: {
                    value: true,
                    message: "You must enter your First name",
                  },
                })}
                className={` border-white  focus:border-0 focus:border-b-[3px]  focus:border-black border-b-[3px] border-[3px] border-b-black  focus:ring-0   ${errors.fname ? "border-b-red-500" : null}`}
                name="lname"
                type="text"
              />
              <span className="text-red-400 text-sm py-2">
                {errors?.lname?.message}
              </span>
            </label>
          </div>
          <label className="flex flex-col space-y-2">
            <span>Email*</span>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter your email address",
                },
                minLength: {
                  value: 8,
                  message: "This is not long enough to be an email",
                },
                maxLength: {
                  value: 120,
                  message: "This is too long",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "This needs to be a valid email address",
                },
              })}
              className={` border-white  focus:border-0 focus:border-b-[3px]  focus:border-black border-b-[3px] border-[3px] border-b-black  focus:ring-0   ${errors.fname ? "border-b-red-500" : null}`}
              name="email"
              type="text"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.email?.message}
            </span>
          </label>
          <label className="flex flex-col space-y-2">
            <span>Telefono</span>
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "You must enter your phone",
                }
              })}
              className={` border-white  focus:border-0 focus:border-b-[3px]  focus:border-black border-b-[3px] border-[3px] border-b-black  focus:ring-0   ${errors.fname ? "border-b-red-500" : null}`}
              name="phone"
              type="tel"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.phone?.message}
            </span>
          </label>
          <label className="flex flex-col space-y-2">
            <span>Scrivi un messaggio</span>
            <textarea
              rows="4"
              {...register("message", {
                required: {
                  value: true,
                  message: "You need to enter your message",
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
                minLength: {
                  value: 50,
                  message: "Your message must be longer than this!",
                },
              })}
              className={` border-white  focus:border-0 focus:border-b-[3px]  focus:border-black border-b-[3px] border-[3px] border-b-black  focus:ring-0   ${errors.fname ? "border-b-red-500" : null}`}
              name="message"
            ></textarea>
            <span className="text-red-400 text-sm py-2">
              {errors?.message?.message}
            </span>
          </label>
              
          <button
            type="submit"
            className={`bg-black w-[35%] rounded-full  self-center py-4 text-white hover:bg-white hover:text-black border-2 border-black disabled:opacity-20 disabled:cursor-not-allowed ${
              success && "bg-blue-600 "
            }`}
            disabled={
              errors.message || errors.email || errors.fname || errors.lname
            }
          >
            {success && "Completed"}
            {loading && "loading"}
            {!loading && !success && "Invia"}
          </button>
        </form>


      </div>
    </div> 
  );
}
