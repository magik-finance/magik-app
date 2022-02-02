import clsx from 'clsx'
import { VFC } from 'react'
import { SubmitHandler, useForm, Validate } from 'react-hook-form'

import { ColorfulLayer } from 'components/ColorfulLayer'
import { LogoSmallIcon } from 'components/icons/LogoSmallIcon'
import { UsersWithPlusIcon } from 'components/icons/UsersWithPlusIcon'

interface FormValues {
  name: string
  email: string
  lead: string
}

const leadOptions = [
  { value: 'Twitter', label: 'Twitter' },
  { value: 'Discord', label: 'Discord' },
  { value: 'Friend', label: 'Friend' },
  { value: 'Mirror.xyz', label: 'Mirror.xyz' },
  { value: 'Other', label: 'Other' },
]

const validateLeadInput: Validate<string> = (inputValue) =>
  !leadOptions.map(({ value }) => value).includes(inputValue)
    ? 'Invalid option'
    : undefined

export const SignUpForBetaForm: VFC<{ className?: string }> = ({
  className,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const submit: SubmitHandler<FormValues> = async (values) => {
    try {
      await fetch('/.netlify/functions/subscribe', {
        method: 'post',
        body: JSON.stringify(values),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      className={clsx('relative', className)}
      onSubmit={handleSubmit(submit)}
    >
      <ColorfulLayer className="blur-3xl rounded-2xl opacity-40" />
      <div className="absolute inset-0 border bg-main-background rounded-2xl border-light-border" />
      <div className="relative flex flex-col text-white">
        <div className="flex items-center justify-center w-8 h-8 border rounded-full border-light-border">
          <LogoSmallIcon className="w-5 h-5" />
        </div>
        <div className="mt-3 text-2xl font-medium md:text-3xl">
          Join Waitlist
        </div>
        <div className="mt-3 text-sm font-medium md:text-base">
          Our beta is now full.{' '}
          <span className="hidden md:inline">
            <br />
          </span>{' '}
          Please leave your email to join the waitlist
        </div>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Name"
          className={clsx(
            'px-6 py-3 md:px-8 md:py-4 mt-6 text-sm md:text-lg font-medium text-white border-none rounded-lg invalid:h-24 placeholder:text-white bg-gradient-to-r from-gray-800 to-gray-900',
            {
              'ring-2 ring-red-600 focus:ring-2 focus:ring-red-700':
                !!errors.name,
            }
          )}
        />
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="Email"
          className={clsx(
            'px-6 py-3 md:px-8 md:py-4 mt-3 md:mt-4 text-sm md:text-lg font-medium text-white border-none rounded-lg placeholder:text-white bg-gradient-to-r from-gray-800 to-gray-900',
            {
              'ring-2 ring-red-600 focus:ring-2 focus:ring-red-700':
                !!errors.email,
            }
          )}
        />
        <div className="relative mt-3 md:mt-4">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900" />
          <select
            {...register('lead', {
              required: true,
              validate: validateLeadInput,
            })}
            className={clsx(
              'relative w-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-medium text-white bg-transparent border-none rounded-lg placeholder:text-white',
              {
                'ring-2 ring-red-600 focus:ring-2 focus:ring-red-700':
                  !!errors.lead,
              }
            )}
            defaultValue="default"
          >
            <option disabled value="default">
              How did you find us?
            </option>
            {leadOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="relative w-full mt-3 rounded-lg md:mt-4 group"
        >
          <ColorfulLayer className="transition-opacity opacity-0 blur-md rounded-2xl group-hover:opacity-60 group-focus:opacity-60" />
          <div className="absolute inset-0 rounded-lg bg-primary-accent" />
          <div className="relative px-6 py-3 text-sm font-medium text-center md:px-10 md:py-6 md:text-xl">
            Join waitlist
          </div>
        </button>
        <div className="flex w-full gap-2 mt-6 md:mt-7">
          <UsersWithPlusIcon className="w-6 h-6 shrink-0" />
          <div className="text-xs font-medium leading-relaxed text-soft-font">
            We will never send you an email{' '}
            <span className="hidden md:inline">
              <br />
            </span>{' '}
            asking for your seed phrase.
          </div>
        </div>
      </div>
    </form>
  )
}
