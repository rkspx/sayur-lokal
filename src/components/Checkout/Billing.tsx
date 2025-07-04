import React, { useState } from "react";
import country from 'country-list-js';

const Billing = () => {
    const defaultCountry = country.findByName("Indonesia");
    const [cityList, setCityList] = useState<string[]>(defaultCountry.provinces.map(p => p.name));
    const [billingCountry, setBillingCountry] = useState<string>("Indonesia");
    const [town, setTown] = useState<string>(defaultCountry.capital == "Jakarta" ? "Jakarta Special Capital Region" : defaultCountry.capital);

    const onCountryChange = (countryName: string) => {
        const c = country.findByName(countryName);
        if (!c) {
            return;
        }

        setCityList(c.provinces ? c.provinces.map(p => p.name) : []);
        setBillingCountry(countryName);
    };

    return (
        <div className="mt-9">
            <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
                Billing details
            </h2>

            <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
                <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
                    <div className="w-full">
                        <label htmlFor="firstName" className="block mb-2.5">
                            First Name <span className="text-red">*</span>
                        </label>

                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Jhon"
                            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="lastName" className="block mb-2.5">
                            Last Name <span className="text-red">*</span>
                        </label>

                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Deo"
                            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="companyName" className="block mb-2.5">
                        Company Name
                    </label>

                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>



                <div className="mb-5">
                    <label htmlFor="address" className="block mb-2.5">
                        Street Address
                        <span className="text-red">*</span>
                    </label>

                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="House number and street name"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />

                    <div className="mt-5">
                        <input
                            type="text"
                            name="address"
                            id="addressTwo"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                        />
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="country" className="block mb-2.5">
                        Country
                    </label>

                    <select id="country" name="country" value={billingCountry} onChange={(e) => onCountryChange(e.target.value)} className="w-full bg-gray-1 rounded-md border border-gray-3 text-dark-4 py-3 pl-5 pr-9 duration-200 appearance-none outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20">
                        {country.names().filter((c, i, arr) => arr.indexOf(c) == i).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="town" className="block mb-2.5">
                        Town/ City <span className="text-red">*</span>
                    </label>

                    <select name="town" id="town" value={town} onChange={(e) => setTown(e.target.value)} className="w-full bg-gray-1 rounded-md border border-gray-3 text-dark-4 py-3 pl-5 pr-9 duration-200 appearance-none outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20">
                        {cityList.filter((c, i, arr) => arr.indexOf(c) == i).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>

                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2.5">
                        Phone <span className="text-red">*</span>
                    </label>

                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div className="mb-5.5">
                    <label htmlFor="email" className="block mb-2.5">
                        Email Address <span className="text-red">*</span>
                    </label>

                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                </div>

                <div>
                    <label
                        htmlFor="checkboxLabelTwo"
                        className="text-dark flex cursor-pointer select-none items-center"
                    >
                        <div className="relative">
                            <input
                                type="checkbox"
                                id="checkboxLabelTwo"
                                className="sr-only"
                            />
                            <div className="mr-2 flex h-4 w-4 items-center justify-center rounded border border-gray-4">
                                <span className="opacity-0">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="4"
                                            y="4.00006"
                                            width="16"
                                            height="16"
                                            rx="4"
                                            fill="#3C50E0"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16.3103 9.25104C16.471 9.41178 16.5612 9.62978 16.5612 9.85707C16.5612 10.0844 16.471 10.3024 16.3103 10.4631L12.0243 14.7491C11.8635 14.9098 11.6455 15.0001 11.4182 15.0001C11.191 15.0001 10.973 14.9098 10.8122 14.7491L8.24062 12.1775C8.08448 12.0158 7.99808 11.7993 8.00003 11.5745C8.00199 11.3498 8.09214 11.1348 8.25107 10.9759C8.41 10.8169 8.62499 10.7268 8.84975 10.7248C9.0745 10.7229 9.29103 10.8093 9.4527 10.9654L11.4182 12.931L15.0982 9.25104C15.2589 9.09034 15.4769 9.00006 15.7042 9.00006C15.9315 9.00006 16.1495 9.09034 16.3103 9.25104Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        Create an Account
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Billing;
