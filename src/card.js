import { NameContext } from './context';
import { useContext } from 'react';

const Card = () => {
	const { employee } = useContext(NameContext);

	return (
		<>
			<div>{employee.firstName}</div>
			<div>{employee.age}</div>
		</>
	);
};

export default Card;
