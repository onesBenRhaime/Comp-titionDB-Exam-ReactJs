import API from "../config/axiosConfig";

export const get = (id) => {
	id = id || "";
	return API.get(`Competitions/${id}`);
};

export const add = (body) => {
	console.log("body", body.name);

	return API.post(`Competitions`, body);
};
export const update = async (id, data) => {
	const result = await API.put(`Competitions/${id}`, data);
	console.log(result.data);
};

export const deleteEventAPI = (id) => {
	return API.delete(`Competitions/${id}`);
};
