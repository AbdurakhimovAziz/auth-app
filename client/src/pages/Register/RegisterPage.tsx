import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';
import { RegisterData } from './types';
import { useState } from 'react';
import { AxiosError } from 'axios';

export const RegisterPage = () => {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<RegisterData>();
  const navigate = useNavigate();

  const onsubmit = async (data: RegisterData) => {
    try {
      await signup(data);
      navigate('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-center mx-2 my-auto">
        <div
          className="w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-10 py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Register
          </h2>
          <form className="mt-10 space-y-4" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                {...register('name', { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="e-mail address"
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                {...register('email', { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                {...register('password', { required: true })}
              />
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Register
            </button>
            <div className="flex flex-wrap justify-end mt-8 mb-4 text-sm text-center">
              <Link to="../login" className="flex-2 underline">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
