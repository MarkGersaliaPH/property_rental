import React from "react";

import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
function FormContent({ data, handleChange, errors }) {
    const types = [
        { id: 1, text: "Admin" },
        { id: 2, text: "Property Owner" },
        { id: 3, text: "Tenants" },
        { id: 4, text: "Staff" },
    ];
    return (
        <div>
            <div className="mb-4">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                    name="email"
                    id="email"
                    className="mt-1 block w-full"
                    value={data.email}
                    onChange={handleChange}
                    required
                    isFocused
                    autoComplete="email"
                    type="email"
                />
                <InputError className="mt-2" message={errors.email} />
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                    name="name"
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={handleChange}
                    required
                    isFocused
                    autoComplete="name"
                    type="text"
                />
                <InputError className="mt-2" message={errors.name} />
            </div>

            <div className="mb-4">
                <InputLabel htmlFor="name" value="Type" />
                <SelectInput
                    name="type"
                    id="type"
                    className="mt-1 block w-full"
                    value={data.type}
                    onChange={handleChange}
                    required
                    isFocused
                    autoComplete="type"
                    type="text"
                    options={types}
                />
                <InputError className="mt-2" message={errors.type} />
            </div>

            {!data.id && (
                <>
                    <div className="mb-4">
                        <InputLabel htmlFor="name" value="Password" />
                        <TextInput
                            name="password"
                            id="password"
                            className="mt-1 block w-full"
                            value={data.password}
                            onChange={handleChange}
                            required
                            isFocused
                            autoComplete="password"
                            type="password"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.password}
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel htmlFor="name" value="Password Confirm" />
                        <TextInput
                            name="password_confirmation"
                            id="password_confirmation"
                            className="mt-1 block w-full"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            required
                            isFocused
                            autoComplete="password_confirmation"
                            type="password"
                        />
                        <InputError
                            className="mt-2"
                            message={errors.password_confirmation}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default FormContent;
