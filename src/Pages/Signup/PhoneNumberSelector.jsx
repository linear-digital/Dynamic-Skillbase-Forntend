import React, { useEffect, useState } from "react";
import { useCountries } from "use-react-countries";
import {
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export function PhoneNumberSelector({ state, setState, countrySelected, placeholder }) {
    const { countries } = useCountries();
    const [country, setCountry] = React.useState(1);
    const { name, flags, countryCallingCode} = countries[country];
    const [value, setValue] = useState("");
    useEffect(() => {
        if (countrySelected) {
            setCountry(countries.findIndex((item) => item.name === countrySelected))
        }
    }, [countrySelected, countries])
    useEffect(() => {
        setState(value.includes(countryCallingCode) ? value : `${countryCallingCode}${value.startsWith('0') ? value.slice(1) : value}`)
    }, [value, countryCallingCode, setState])
    return (
        <div>
            <label className="text-xs mb-1">{placeholder}</label>
            <div className="relative flex w-full">
                <Menu placement="bottom-start">
                    <MenuHandler>
                        <Button
                            ripple={false}
                            variant="text"
                            color="blue-gray"
                            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                        >
                            <img
                                src={flags.svg}
                                alt={name}
                                className="h-4 w-4 rounded-full object-cover"
                            />
                            {countryCallingCode}
                        </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] max-w-[18rem]">
                        {countries.map(({ name, flags, countryCallingCode }, index) => {
                            return (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    className="flex items-center gap-2"
                                    onClick={() => setCountry(index)}
                                >
                                    <img
                                        src={flags.svg}
                                        alt={name}
                                        className="h-5 w-5 rounded-full object-cover"
                                    />
                                    {name} <span className="ml-auto">{countryCallingCode}</span>
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </Menu>
                <Input
                    type="number"
                    name="phone"
                    placeholder={placeholder}
                    className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    containerProps={{
                        className: "min-w-0",
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
}