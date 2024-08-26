import { useState } from "react"
import { IErrors, IValues } from "../types"

interface IProps {
    initialValues: IValues
    onSubmit: (values: IValues) => void
}

export const useForm = ({ initialValues, onSubmit }: IProps) => {

    const [values, setValues] = useState<IValues>(initialValues)
    const [errors, setErrors] = useState<IErrors>({})

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const temp = { ...errors }
        setErrors(temp)

        if (Object.keys(temp).length == 0) {
            onSubmit(values)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    return {
        values,
        errors,
        handleSubmit,
        handleChange
    }


}