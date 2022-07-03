import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className="d-flex">
			<div>
				<p>Logo</p>
			</div>
      <nav>
        <ul >
          <li className="d-inline mx-2"><Link to="/">Home</Link></li>
          <li className="d-inline"><Link to="/about">About</Link></li>
        </ul>
      </nav>
		</div>
	);
};

export default Navbar;
