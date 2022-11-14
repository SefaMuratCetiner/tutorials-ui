import BaseEntity from "./base-entity";
import Lesson from "./lesson";

export default interface Programme extends BaseEntity {
	title?: string;
	start: Date;
	end: Date;
	isPublished: boolean;
	lessons: Lesson[];
}
