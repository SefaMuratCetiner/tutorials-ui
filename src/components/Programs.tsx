import { Table } from "react-bootstrap";
import StringConstants from "../constants/string-constants";
import { fetchProgramsById } from "../hooks/program-hooks";
import PaginatedList from "../models/paginated-list";
import Programme from "../models/programme";

const getTableData = (data?: PaginatedList<Programme>) => {
	return (
		data?.items?.map((programme: Programme) => (
			<tr key={programme.title}>
				{Object.values(programme).map((value: any) => (
					<td key={`${programme.title}_${value}`}>
						{JSON.stringify(value)}
					</td>
				))}
			</tr>
		)) ?? <></>
	);
};

const getTableHeader = (): string[] => {
	return [
		StringConstants.Title,
		StringConstants.Start,
		StringConstants.End,
		StringConstants.IsPublished,
		StringConstants.Lessons,
	];
};

export const Programs = () => {
	const { isLoading, error, data, isFetching } = fetchProgramsById();

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
