import { useQuery } from "@tanstack/react-query";
import StringConstants from "../constants/string-constants";
import { getProgramsById } from "../services/programme-service";

export const fetchProgramsById = () => {
	const query = useQuery({
		queryKey: [StringConstants.ProgramsQuery],
		queryFn: getProgramsById,
	});

	return query;
};
