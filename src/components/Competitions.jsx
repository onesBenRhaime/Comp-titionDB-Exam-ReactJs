import { Container } from "react-bootstrap";
import competitions from "./Competition.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get } from "../services/eventServices";
import { getEvents } from "../redux/actions";
import Competition from "./Competition";
export default function Competitions() {
	const competition = useSelector((state) => state.event.events);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchEvents();
		console.log(competition);
	}, []);

	const fetchEvents = async () => {
		try {
			const result = await get();
			dispatch(getEvents(result.data));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className="py-5 mt-5 ">
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Fees</th>
							<th>Date</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{competitions.map((competition, index) => {
							return <Competition key={index} competition={competition} />;
						})}
					</tbody>
				</table>
			</div>
		</Container>
	);
}
