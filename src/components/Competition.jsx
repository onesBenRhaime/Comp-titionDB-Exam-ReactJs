import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Competition(props) {
	const [competition, setCompetition] = useState(props.competition);


	return (
		<>
			<tr>
				<td>{competition.id}</td>
				<td>{competition.name}</td>
				<td>{competition.fees}</td>
				<td>{competition.date}</td>
				<td>
					<NavLink to={`${competition.id}`}>details</NavLink>
				</td>
			</tr>
		</>
	);
}
