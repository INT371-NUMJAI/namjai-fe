import { reactive, ref } from "vue";

export function useValidation() {
	const startDate = ref("");
	const validators = reactive({
		required: (value) => !!value || "This field is required",
		minLength: (value) => value.length >= 8 || "Your password must be minimum 8 characters",
		negativeNumber: (value) => parseInt(value) > 0 || "The number must be greater than 0",
		phoneNoLength: (value) => value.length == 10 || "Your phone number must be 10 characters",
		craditCardNumber: (value) => value === "4242424242" || "Accept only 4242-4242-42",
		SecurityDigits: (value) => value.length == 3 || "Security code should be 3 digits",
		limitFileSize: (value) => Array.isArray(value) && value[0].size/1000000 <= 3 || "File size should not be over 3 MB",
		notLessThanToday: (value) => new Date() <= new Date(value) || "Can not choose the older date than today",
		notLessThanStartDate: (value) => new Date(value) > new Date(startDate.value) || "Can not choose the older date than start date"
	});
	return { validators, startDate };
}
