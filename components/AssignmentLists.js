import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
	components: { Assignment, AssignmentTags },
	template: `
        <section v-show="assignments.length" class="mb-10">
            <h2 class="text-3xl mb-2">{{ title }}</h2>

			<assignment-tags 
			:initialTags="assignments.map(a=> a.tag)"
			@updates="currentTag = $event"
			:currentTag="currentTag"
		>

			</assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment 
                        v-for="assignment in filteredAssignments" 
                        :assignment="assignment" 
                        :key="assignment.id">
                </assignment>
            </ul>
       </section>
       
        `,
	props: {
		assignments: Array,
		title: String,
	},
	data() {
		return {
			currentTag: "All",
		};
	},
	computed: {
		filteredAssignments() {
			if (this.currentTag === "All") {
				return this.assignments;
			}
			return this.assignments.filter(
				(assignment) => assignment.tag === this.currentTag
			);
		},
	},
};
