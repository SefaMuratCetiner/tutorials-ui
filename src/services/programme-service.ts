import PaginatedList from "../models/paginated-list";
import Programme from "../models/programme";
import { request } from "./axios-interceptor";

const programsEndPoint: string = "api/Programs";

export const getProgramsById = async (): Promise<PaginatedList<Programme>> => {
	const response = await request({
		url: `/${programsEndPoint}`,
	});

	if (!response.data) {
		const errorCode = response.code;
		const errorMessage = response.message;
		throw `${errorCode}: ${errorMessage}`;
	}

	return response.data;
};

export const createProgram = async (data: Programme): Promise<number> => {
	const response = await request({
		url: `/${programsEndPoint}`,
		method: "post",
		data: data,
	});

	if (!response.data) {
		const errorCode = response.code;
		const errorMessage = response.message;
		throw `${errorCode}: ${errorMessage}`;
	}

	return response.data;
};

export const updateProgramById = async (
	id: number,
	data: Programme
): Promise<void> => {
	return await request({
		url: `/${programsEndPoint}/${id}`,
		method: "put",
		data: data,
	});
};

export const deleteProgramById = async (id: number): Promise<void> => {
	return await request({
		url: `/${programsEndPoint}/${id}`,
		method: "delete",
	});
};
