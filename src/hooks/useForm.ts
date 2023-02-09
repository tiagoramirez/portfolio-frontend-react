import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

type IForm<T> = {
    formState: T,
    onInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onResetForm: () => void,
    setFormState: Dispatch<SetStateAction<T>>
}

export const useForm = <T>(initialForm: T): IForm<T> => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        formState,
        onInputChange,
        onResetForm,
        setFormState,
    };
};
