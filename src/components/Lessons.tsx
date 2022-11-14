import Table from "react-bootstrap/Table";
import StringConstants from "../constants/string-constants";
import { fetchLessonsByProgrammeId } from "../hooks/lesson-hooks";
import Lesson from "../models/lesson";
import PaginatedList from "../models/paginated-list";

const getTableData = (data?: PaginatedList<Lesson>) => {
	return (
		data?.items?.map((lesson: Lesson) => (
			<tr key={`${lesson.programmeId}_${lesson.title}`}>
				{Object.values(lesson).map((value: any) => (
					<td key={`${lesson.programmeId}_${value}`}>
						{JSON.stringify(value)}
					</td>
				))}
			</tr>
		)) ?? <></>
	);
};

const getTableHeader = (): string[] => {
	return [
		StringConstants.ProgrammeId,
		StringConstants.Title,
		StringConstants.Description,
		StringConstants.Link,
	];
};

export const Lessons = () => {
	const { isLoading, error, data, isFetching } = fetchLessonsByProgrammeId(2);

	if (isLoading) return <h3>{StringConstants.Loading}</h3>;

	if (isFetching) return <h3>{StringConstants.Updating}</h3>;

	if (error) {
		return (
			<h3>
				{`${StringConstants.ErrorOccured} ${JSON.stringify(error)}`}
			</h3>
		);
	}

	return (
		<>
			<Table
				striped
				bordered
				hover
			>
				<thead>
					<tr>
						{getTableHeader().map((header: string) => (
							<th key={header}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>{getTableData(data)}</tbody>
			</Table>
		</>
	);
};
