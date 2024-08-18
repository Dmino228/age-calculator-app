import { ChangeEvent } from "react"

type Props = {
    children?: React.ReactNode,
    name: string,
    error: MyError,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export default function FormField({children, name, error, handleChange}: Props) {
    let placeholder;
    switch (name) {
        case "day": {
            placeholder = "DD";
            break;
        }
        case "month": {
            placeholder = "MM";
            break;
        }
        case "year": {
            placeholder = "YYYY";
            break;
        }
    }

    return (
        <div className="flex flex-col gap-2 h-32">
            <label 
                htmlFor={name} 
                className={`tracking-[0.15em] uppercase lg:tracking-[0.2em] ${error.active || (error as any)[name].active ? "text-primary-light-red" : "text-smokey-grey"}`}>{name}</label>
            <input 
                type="number" 
                id={name} 
                name={name} 
                onChange={handleChange}
                placeholder={placeholder} 
                className={`text-xl text-off-black w-20 px-3 py-2 border-[1px] border-solid rounded-lg uppercase focus:border-primary-purple focus:outline-none transition lg:px-5 lg:py-3 lg:w-40 lg:text-3xl ${error.active || (error as any)[name].active ? "border-primary-light-red" : "border-light-grey"}`} />
            {children || (error as any)[name].active && <p className="text-sm text-primary-light-red italic">{(error as any)[name].message}</p>}
        </div>
    )
}