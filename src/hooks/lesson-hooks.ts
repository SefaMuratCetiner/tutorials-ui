import { useQuery } from "@tanstack/react-query";
import StringConstants from "../constants/string-constants";
import { getLessonsByProgrammeId } from "../services/lessons-service";

export const fetchLessonsByProgrammeId = (programmeId: number) => {
	const query = useQuery({
		queryKey: [StringConstants.LessonsQuery, programmeId],
		queryFn: () => getLessonsByProgrammeId(programmeId),
		enabled: !!programmeId,
	});

	return query;
};
