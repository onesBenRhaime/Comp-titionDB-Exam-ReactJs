import API from "../config/axiosConfig";

export const get = (id) => {
	id = id || "";
	return API.get(`Competitions/${id}`);
};

export const add = (body) => {
	console.log("body", body.name);

	return API.post(`Competitions`, body);
};
//update
export const update = (id, list) => {
	const competitionData = API.get(`Competitions/${id}`);
	console.log("competitionData", competitionData);
	const updatedCompetition = {
		name: competitionData.name,
		fees: competitionData.fees,
		date: competitionData.date,
		description: competitionData.description,
		participants: competitionData.participants - 1,
		participantsList: list,
	};
	console.log("updatedCompetition", updatedCompetition);
	return API.put(`Competitions/${id}`, updatedCompetition);
};

export const deleteEventAPI = (id) => {
	return API.delete(`Competitions/${id}`);
};
