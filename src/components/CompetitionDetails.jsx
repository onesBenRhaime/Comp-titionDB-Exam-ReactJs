import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import competitions from "./Competition.json";
import AddPlayer from "./AddPlayer";
function CompetitionDetails() {
	const { id } = useParams();

	const [competition, setCompetition] = useState({});
	const [list, setList] = useState([]);
	const [show, setShow] = useState(false);
	useEffect(() => {
		const c = competitions.find((movie) => movie.id === id);
		setList(c.participantsList);
		console.log(c);
		setCompetition(c);
	}, [id]);

	return (
		<Container className="mt-5 py-5 m-5">
			<Card>
				<Row>
					<Col className="text-center">
						<Card.Body>
							<Card.Text>
								<br /> <b className="mx-5"> {competition.name}</b>
							</Card.Text>
							<Card.Text>
								<b>Price :</b>
								<br /> <p className="mx-5">{competition.fees} </p>
							</Card.Text>
							<Card.Text>
								<b>Date :</b>
								<br /> <p className="mx-5">{competition.Date} </p>
							</Card.Text>
							<Card.Text>
								<br /> <p className="mx-5">{competition.description} </p>
							</Card.Text>
							<Card.Text>
								<b>Participants :</b>
								<br /> <p className="mx-5">{competition.participants} </p>
							</Card.Text>
							<Card.Text>
								<button
									className="btn btn-primary"
									disabled={competition.participants === 0 ? true : false}
									onClick={() => {
										setShow(true);
									}}
								>
									Participate
								</button>
							</Card.Text>
						</Card.Body>
					</Col>
				</Row>{" "}
			</Card>
			<br />
			<br />

			{show ? (
				<AddPlayer
					competitionId={competition.id}
					participantsList={competition.participantsList}
				/>
			) : (
				<Card>
					<Card.Title> List UserNames </Card.Title>
					<Card.Body>
						<Row>
							<Col>
								<ul>
									{list.map((participant, index) => {
										return <li key={index}>{participant}</li>;
									})}
								</ul>
							</Col>
						</Row>{" "}
					</Card.Body>
				</Card>
			)}
		</Container>
	);
}

export default CompetitionDetails;
