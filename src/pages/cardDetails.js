import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = ({ cards }) => {
	const { id } = useParams();
	
	const [card, setCard] = useState({});

	useEffect(() => {
		const card = cards.find(card => card.id === id);
		console.log(card)
		setCard(card);
	}, []);

	return (
		<div>
			<h2>{card.cardTitle}</h2>
			<p>{card.body}</p>
		</div>
	);
};

export default CardDetails;
