import { ChangeEventHandler } from 'react';

interface Props {
    name: string;
    value: string | number;
    onInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    isPassword?: boolean;
}

export const AuthInput = ({ name, value, onInputChange, isPassword }: Props) => {
    return (
        <>
            <label className="font-semibold text-sm text-primary block capitalize">{name}</label>
            <input type={isPassword ? 'password' : 'text'} name={name} value={value} onChange={onInputChange} className="border border-primary rounded-lg px-3 py-2 mt-1 mb-2 text-sm text-secondary w-full bg-primary" />
        </>
    );
};
