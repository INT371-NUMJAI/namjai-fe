import { reactive } from "vue";

export function useValidation(fileExtension) {
	const validators = reactive({
		required: (value) => !!value || "This field is required",
		minLength: (value) => value.length >= 8 || "Your password must be minimum 8 characters",
	});
	return { validators };
}
