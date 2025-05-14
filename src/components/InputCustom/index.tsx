import { twMerge } from "tailwind-merge";

import type {
	InputFieldProps,
	InputIconProps,
	InputRootProps,
} from "@/components/InputCustom/InputCustom.type";
import { Input } from "@/components/ui/input";

function InputRoot({ error, className, ...props }: InputRootProps) {
	return (
		<div
			data-error={error}
			className={twMerge(
				"relative bg-white rounded-sm overflow-hidden flex items-center border-3 focus-within:border-sky-400 group [&:has(input:read-only,data-[error=false])]:border-sky-400 [&:not(:has(input:placeholder-shown)):not(:has(input:read-only)):not([data-error=true])]:border-sky-400 data-[error=true]:border-red-100",
				className,
			)}
			{...props}
		/>
	);
}

function InputField({ className, ...props }: InputFieldProps) {
	return (
		<Input
			className={twMerge(
				"border-0 rounded-none overflow-hidden pr-12 text-ellipsis mr-auto outline-0 placeholder-gray-400 group-data-[error=true]:placeholder-red-100",
				className,
			)}
			{...props}
		/>
	);
}

function InputIcon({ className, ...props }: InputIconProps) {
	return (
		<i
			className={twMerge(
				"absolute text-gray-800 group-focus-within:text-gray-600 group-[&:not(:has(input:placeholder-shown)):not([data-error=true])]:text-gray-600 group-data-[error=true]:text-red-100",
				className,
			)}
			{...props}
		/>
	);
}

export { InputField, InputIcon, InputRoot };
