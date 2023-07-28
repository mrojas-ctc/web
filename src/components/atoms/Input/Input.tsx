import React, { FormEvent, useState } from "react";

import colors from "../Colors";
import Typography from "../Typography";

import "./input.scss";

interface Props {
	size?: any;
	value?: string | number | undefined;
	type?: string;
	onChange?: any;
	variant?: string;
	placeholder?: string;
	name?: string;
	required?: boolean;
	error?: string;
	onBlur?: any;
	disabled?: boolean;
	className?: string;
}

const Input: React.FC<Props> = ({
	variant = "reg-14",
	placeholder,
	value,
	type = "string",
	onChange,
	name,
	error,
	required = false,
	disabled = false,
	onBlur,
	className = "",
	...rest
}: Props) => {
	return (
		<div className="input">
			<input
				className={`input__content input__content--${variant} input--${
					disabled ? "disabled" : "active"
				} ${className}`}
				style={{
					border: error ? `1px solid ${colors.warningColor}` : "",
				}}
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				disabled={disabled}
				{...rest}
			/>
			{error && (
				<Typography
					type="paragraph2"
					variation="mobile"
					className="input__alert"
					color={colors.warningColor}
				>
					{error}
				</Typography>
			)}
		</div>
	);
};

export default Input;
