import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Competition from "./Competition";
import { get } from "../services/serviceData";
import { getData } from "../redux/actions";
export default function Competitions() {
	const competitions = useSelector((state) => state.data.data);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchData();
		console.log(competitions);
	}, []);

	const fetchData = async () => {
		try {
			const result = await get();
			dispatch(getData(result.data));
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
