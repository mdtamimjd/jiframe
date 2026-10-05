"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { LoginSchema, type LoginSchemaType } from '.';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginSchemaType) => {
    setErrorMsg(null);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMsg("Invalid email or password");
      } else if (res?.ok) {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMsg("An unexpected error occurred.");
    }
  };

  return (
    <div className='bg-white/90 p-5 rounded-md shadow m-4 w-full md:w-xl'>
      <h1 className='text-2xl md:text-4xl font-bold text-center'>Login for better experience</h1>
      
      {errorMsg && (
        <div className="mt-4 p-2 text-sm text-red-600 bg-red-100 rounded border border-red-200 text-center">
          {errorMsg}
        </div>
      )}

      <section className='flex flex-col gap-4 mt-4 items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>Email</label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              {...register('email')}
              className='w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4'
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 font-semibold mb-2'>Password</label>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              {...register('password')}
              className='w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4'
            />
            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm active:bg-blue-300 disabled:opacity-50'
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div>
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
            className='bg-white border flex items-center gap-2 border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-sm active:bg-gray-300'
          >
            <FcGoogle /> Continue With Google
          </button>
        </div>
      </section>
    </div>
  );
}