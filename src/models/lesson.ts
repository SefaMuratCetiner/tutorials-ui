import BaseEntity from "./base-entity";

export default interface Lesson extends BaseEntity {
	programmeId: number;
	title?: string;
	description?: string;
	link?: string;
}
