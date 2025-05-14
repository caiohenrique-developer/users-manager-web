import type { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
	error?: boolean;
}

interface InputFieldProps extends ComponentProps<"input"> {}

interface InputIconProps extends ComponentProps<"i"> {}

export type { InputFieldProps, InputIconProps, InputRootProps };
