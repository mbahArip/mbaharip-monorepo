import { FC, ReactNode } from 'react';

type ParagraphProps = {
	children: ReactNode;
};

const Paragraph: FC<ParagraphProps> = ({ children }) => {
	return <p className='my-2 mx-4 w-1/2 md:mx-8 md:my-4'>{children}</p>;
};

export default Paragraph;
