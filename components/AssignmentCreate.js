export default {
	template: `
        <form @submit.prevent="add">
			<input v-model="newAssignment" type="text" placeholder="Add Assignment" class="text-black border-none outline-none p-2">
			<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Add</button>
		</form>
    `,
	data() {
		return {
			newAssignment: "",
		};
	},
	methods: {
		add() {
			this.$emit("add", this.newAssignment), (this.newAssignment = "");
		},
	},
};
