import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
	components: { Assignment, AssignmentTags },
	template: `
        <section v-show="show && assignments.length" class="mb-10 bg-gray-700 p-4 border border-gray-600 rounded-lg">
            <div class="flex justify-between items-center mb-6">
				<h2 class="text-3xl mb-2">
			{{ title }}
			<span>({{ assignments.length }})</span>
			</h2>
			<button v-show="canToggle" @click="show = false" class="text-2xl">&times;</button>
			</div>

			<assignment-tags 
			v-model="currentTag"
			:initialTags="assignments.map(a=> a.tag)"
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
		canToggle: { type: Boolean, default: false },
	},
	data() {
		return {
			currentTag: "All",
			show: true,
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
