import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { add, update } from "../services/eventServices";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, updateEvent } from "../redux/actions";

function AddPlayer({ competitionId, participantsList }) {
	const competitions = useSelector((state) => state.event.events);
	const dispatch = useDispatch();

	const f = useFormik({
		initialValues: {
			name: "",
		},
		onSubmit: async (values) => {
			console.log(values);
			if (!participantsList.includes(values.name)) {
				participantsList.push(values.name);
				console.log(participantsList);

				console.log(competitionId);

				const result = await update(competitionId, participantsList);
				console.log(result.data);
				dispatch(updateEvent(result.data));
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
