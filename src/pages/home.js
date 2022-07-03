import { Link } from 'react-router-dom';

const Home = ({cards}) => {

	return (
		<div>
			<h1>Home Page</h1>
			<div>
				<div>
					{cards.map(card => (
						<div key={card.id} className="m-3 border p-3">
							<h3>{card.cardTitle}</h3>
							<p>{card.body}</p>
							<Link to={'/card/' + card.id}>show more</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
