import { reactive } from "vue";

export function useValidation() {
	const validators = reactive({
		required: (value) => !!value || "This field is required",
	});
	return { validators };
}
