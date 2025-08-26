import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react"
import { useState } from "react";
import React from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {

    const [inputValue, setInputValue] = useState("");

    const debouncedSetValue = React.useCallback(
        debounce((value: string) => {
            console.log("valor com debounce: ", value);
        }, 400),
        []
    );

    function handleInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setInputValue(value);
        debouncedSetValue(value);
    }

    return <InputText
        icon={SearchIcon}
        className="flex-1"
        placeholder="Buscar fotos"
        value={inputValue}
        onChange={handleInputValueChange}
    />
}