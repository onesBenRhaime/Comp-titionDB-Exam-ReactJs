import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../redux/actions";
import { update } from "../services/serviceData";
import { useNavigate } from "react-router-dom";

function AddPlayer({ competitionId, participantsList, onParticipantAdded }) {
	const competitions = useSelector((state) => state.data.data);
	const dispatch = useDispatch();

	const f = useFormik({
		initialValues: {
			name: "",
		},
		onSubmit: async (values) => {
			if (!participantsList.includes(values.name)) {
				participantsList.push(values.name);
				const d = competitions.find(
					(competition) => competition.id === competitionId
				);
				const updaredData = {
					name: d.name,
					fees: d.fees,
					date: d.date,
					description: d.description,
					participantsList: participantsList,
					participants: d.participants - 1,
				};

				const result = await update(competitionId, updaredData);
				dispatch(updateData(result));
				onParticipantAdded();
			} else {
				window.alert("Username already exists!");
			}
		},
	});
	return (
		<>
			<Form onSubmit={f.handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						name="name"
						value={f.values.name}
						onChange={f.handleChange}
						placeholder="Enter username"
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					confirm
				</Button>
			</Form>
		</>
	);
}
export default AddPlayer;
