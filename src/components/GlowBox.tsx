import React from 'react';
import './GlowBox.css';

type TGlowBox = {
	color: string;
	icon: React.ReactNode;
	title?: string;
};

export const GlowBox = ({ color, icon, title }: TGlowBox) => {
	return (
		<div className='glow-box-parent group'>
			<div
				className='glow-box'
				style={
					{
						'--clr': color,
					} as React.CSSProperties
				}
			>
				<div className="relative z-10 text-2xl sm:text-3xl flex items-center justify-center">
					{icon}
				</div>
			</div>
			{title && <span className='glow-box-text'>{title}</span>}
		</div>
	);
};