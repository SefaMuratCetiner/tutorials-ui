import Lesson from "../models/lesson";
import PaginatedList from "../models/paginated-list";
import { request } from "./axios-interceptor";

const lessonsEndPoint: string = "api/Lessons";

export const getLessonsByProgrammeId = async (
	programmeId: number
): Promise<PaginatedList<Lesson>> => {
	const response = await request({
		url: `/${lessonsEndPoint}?ProgrammeId=${programmeId}`,
	});

	if (!response.data) {
		const errorCode = response.code;
		const errorMessage = response.message;
		throw `${errorCode}: ${errorMessage}`;
	}

	return response.data;
};

export const createLesson = async (data: Lesson): Promise<number> => {
	const response = await request({
		url: `/${lessonsEndPoint}`,
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

export const updateLessonById = async (
	id: number,
	data: Lesson
): Promise<void> => {
	return await request({
		url: `/${lessonsEndPoint}/${id}`,
		method: "put",
		data: data,
	});
};

export const deleteLessonById = async (id: number): Promise<void> => {
	return await request({
		url: `/${lessonsEndPoint}/${id}`,
		method: "delete",
	});
};
