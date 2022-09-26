import {forwardRef, ReactNode} from 'react';

type ButtonProps = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'primary' | 'ghost' | 'outline' | 'link';
	children: ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	disabled?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			size = 'md',
			variant = 'primary',
			children = '',
			className,
			onClick,
			type = 'button',
			disabled = false,
		},
		ref,
	) => {
		const sizeValue = {
			xs: 'px-2 py-1 text-xs',
			sm: 'px-3 py-1 text-sm',
			md: 'px-4 py-2 text-base',
			lg: 'px-5 py-2 text-lg',
			xl: 'px-6 py-3 text-lg',
		};
		const variantValue = {
			primary: 'btn-primary',
			ghost: 'btn-ghost',
			outline: 'btn-outline',
			link: 'btn-link',
		};

		return (
			<button
				className={`${sizeValue[size]} ${variantValue[variant]} ${className}`}
				type={type}
				disabled={disabled}
				onClick={onClick}
				ref={ref}
			>
				{children}
			</button>
		);
	},
);

Button.defaultProps = {
	size: 'md',
	variant: 'primary',
	type: 'button',
	disabled: false,
	className: '',
	onClick: () => {},
};
export default {Button};
