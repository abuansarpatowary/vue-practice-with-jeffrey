import AssignmentLists from "./AssignmentLists.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
	components: { AssignmentLists, AssignmentCreate },
	template: `
		<assignment-lists :assignments="filters.inProgress" title="In Progress" ></assignment-lists>
		<assignment-lists :assignments="filters.completed" title="Completed" ></assignment-lists>

		<assignment-create @add="add"></assignment-create>
		
    `,
	data() {
		return {
			assignments: [
				{
					name: "Assignment 1",
					completed: false,
					id: 1,
					tag: "School",
				},
				{
					name: "Assignment 2",
					completed: false,
					id: 2,
					tag: "Tutorial",
				},
				{
					name: "Assignment 3",
					completed: false,
					id: 3,
					tag: "School",
				},
				{
					name: "Assignment 4",
					completed: false,
					id: 4,
					tag: "Tuition",
				},
			],
			newAssignment: "",
		};
	},
	/* methods: {
		toggle() {
			this.active = !this.active;
		},
	}, */
	computed: {
		filters() {
			return {
				inProgress: this.assignments.filter(
					(assignment) => !assignment.completed
				),
				completed: this.assignments.filter(
					(assignment) => assignment.completed
				),
			};
		},
	},
	methods: {
		add(name) {
			this.assignments.push({
				name: name,
				completed: false,
				id: this.assignments.length + 1,
			}),
				(this.newAssignment = "");
		},
	},
};
