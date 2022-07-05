import { createContext, useEffect } from 'react';
import { useState } from 'react';
export const NameContext = createContext();

export const TheContextProvider = ({ children }) => {
	const [employee, setEmployee] = useState({
		firstName: 'Islam',
		age: 35,
	});

	useEffect(() => {
		setEmployee({
			firstName: 'Ali',
			age: 35,
		});
	}, []);

	return (
		<NameContext.Provider value={{ employee }}>{children}</NameContext.Provider>
	);
};
