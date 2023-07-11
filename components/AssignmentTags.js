export default {
	template: `
        <div>
            <button v-for="tag in tags"
            @click="$emit('update:modelValue', tag)"
            class="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-1 rounded mr-2 mb-2"
            :class="{ 'bg-blue-700' :tag === modelValue }"
            >
            {{tag}}
            </button>
        </div>
    `,
	props: {
		initialTags: Array,
		modelValue: String,
	},
	computed: {
		tags() {
			return ["All", ...new Set(this.initialTags)];
		},
	},
};
