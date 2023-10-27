// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {

    const [currentpage, setCurrentPage] = useState(1);
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({mode: "all"});

    const onSubmit = (data) => {
        console.log(data);
        alert('Your form is submitted successfully');
    }

    const nextPage = () => {
        if (currentpage < 4) {
            setCurrentPage(currentpage + 1);
        }
    }

    const prevPage = () => {
        if (currentpage > 1) {
            setCurrentPage(currentpage - 1);
        }
    }

    return (
        <form noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-12 px-4 py-4 sm:mx-28 sm:my-12 bg-gray-100 rounded sm:px-12 sm:py-6">
            <div>
                <h1 className="text-3xl mb-3 text-center text-indigo-700 font-bold">Welcome to the Club</h1>
                {/* Profile is here */}
                {
                    currentpage === 1 &&
                    <section>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                This information will be displayed publicly so be careful what you share.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input
                                                type="text"
                                                id="username"
                                                {...register('username', {
                                                    required: 'Username is required'
                                                })}
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Enter your username"
                                            />
                                            <p className="text-sm text-red-600">{errors.username?.message}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            {...register('about', {
                                                required: 'About is required'
                                            })}
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.about?.message}</p>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                                </div>


                            </div>
                        </div>
                    </section>
                }

                {/* Personal Information is here */}
                {
                    currentpage === 2 &&
                    <section>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="first-name"
                                            {...register('firstname', {
                                                required: 'Firstname is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.firstname?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="last-name"
                                            {...register('lastname', {
                                                required: 'Lastname is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.lastname?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            type="email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                                    message: 'Email is not valid'
                                                },
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.email?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }

                {/* Address information is here */}
                {
                    currentpage === 3 &&
                    <section>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Address Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive Orders</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Country
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            {...register('country', {
                                                required: 'Country is required'
                                            })}
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option>India</option>
                                            <option>UK</option>
                                            <option>USA</option>
                                            <option>Singapore</option>
                                            <option>Russia</option>
                                            <option>Australia</option>
                                        </select>
                                        <p className="text-sm text-red-600">{errors.country?.message}</p>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="street-address"
                                            {...register('street', {
                                                required: 'Street Address is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.street?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="city"
                                            {...register('city', {
                                                required: 'City is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.city?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="region"
                                            {...register('state', {
                                                required: 'State is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.state?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            id="postal-code"
                                            {...register('pincode', {
                                                required: 'Pincode is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.pincode?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }

                {/* Payment details information is here */}
                {
                    currentpage === 4 &&
                    <section>
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Payment Details</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Please enter your card details
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Card Holder's name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            id="cardholdername"
                                            {...register('cardholdername', {
                                                required: 'Card Holder name is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.cardholdername?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        Card Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            {...register('cardno', {
                                                required: 'Card No. is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.carno?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                        Expiry
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            {...register('expdate', {
                                                required: 'Expiry Date is required',
                                                pattern: /^(0[1-9]|1[0-2])\/\d{2}$/
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="mm/yy"
                                        />
                                        <p className="text-sm text-red-600">{errors.expdate?.message}</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        CVV
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            {...register('cvv', {
                                                required: 'CVV is required'
                                            })}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <p className="text-sm text-red-600">{errors.cvv?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </div>

            <div className={`mt-6 flex items-center sm:justify-end gap-x-6 ${currentpage === 1 ? 'justify-end' : 'justify-between'}`}>
                {currentpage !== 1 && <button
                    onClick={prevPage}
                    type="button"
                    className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Prev
                </button>}
                <button
                    onClick={nextPage}
                    disabled={!isValid}
                    type={currentpage === 4 ? "submit" : "button"}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {currentpage === 4 ? 'Submit' : 'Next'}
                </button>
            </div>
        </form>
    )
}

export default Form;