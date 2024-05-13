import { Alert, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

function Home() {
	const [showWelcome, setShowWelcome] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShowWelcome(false);
		}, 3000);
	}, []);

	return (
		<Container>
			<Row>
				{showWelcome && (
					<Alert variant="success">Welcome to Our Competition World</Alert>
				)}
			</Row>
		</Container>
	);
}

export default Home;
