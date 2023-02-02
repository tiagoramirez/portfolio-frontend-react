import { ChangeEventHandler, useState } from 'react';

type IForm<T> = {
    formState: T,
    onInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    onResetForm: () => void,
}

export const useForm = <T>(initialForm: T): IForm<T> => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
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
    };
};
