import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="flex justify-between items-center w-full max-container gap-16 max-lg:flex-col">
      <h2 className="text-4xl font-bold font-palanquin lg:max-w-md leading-[64px]">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h2>
      <div className="lg:max-w-[40%] w-full flex max-sm:flex-col gap-5 items-center sm:border sm:border-slate-gray rounded-full pl-4">
        <input 
          className="input"
          type="text"
          placeholder="suscribe@nike.com"/>
          <div className='flex max-sm:justify-end max-sm:w-full items-center'>
              <Button label="Sign Up" fullWidth/>
            </div>
      </div>
    </section>
  );
};

export default Subscribe;
