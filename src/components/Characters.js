import React from 'react'

const Characters = ({ characters}) => {
  return (
		<div className="row">
			{characters.map((e, index) => (
				<div key={index} className="col mb-4">
					<div className="card" style={{ minWidth: '200px' }}>
						<img src={e.image} />
						<div className="card-body">
							<h5 className="card-title">{e.name}</h5>
							<hr />
							<p>Specie: {e.species}</p>
							<p>location: {e.location.name}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Characters