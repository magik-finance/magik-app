import clsx from 'clsx'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormValues {
  email: string
}

export const SignUpForBetaSmallForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const submit: SubmitHandler<FormValues> = (values) => {
    console.log('values', values)
  }

  return (
    <form
      className="mb-24 md:flex md:justify-between md:max-w-7xl md:mx-auto md:items-center"
      onSubmit={handleSubmit(submit)}
    >
      <div className="px-6 text-6xl font-medium leading-tight text-white md:text-7xl md:leading-tight">
        Sign up to
        <br />
        our beta
      </div>
      <div className="px-6 md:w-[460px]">
        <div className="mt-6 font-medium text-white">
          Leave your email to sign up for the Beta
        </div>
        <div
          className={clsx(
            'flex mt-3 overflow-hidden border rounded-lg border-light-border focus-within:ring',
            {
              'ring-2 ring-red-600 focus-within:ring-2 focus-within:ring-red-700':
                !!errors.email,
            }
          )}
        >
          <input
            type="email"
            className="px-6 py-3 text-xs text-white bg-transparent border-none placeholder:text-soft-font grow focus:ring-0 md:text-base md:py-5 md:px-8"
            placeholder="Example@gmail.com"
            {...register('email', { required: true })}
          />
          <button
            type="submit"
            className="hidden w-40 py-3 m-2 text-xl font-bold leading-none text-center text-white rounded-lg md:block bg-primary-accent"
          >
            Send
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 text-sm font-medium text-center text-white rounded-lg md:hidden bg-primary-accent"
        >
          Submit your email
        </button>
      </div>
    </form>
  )
}
