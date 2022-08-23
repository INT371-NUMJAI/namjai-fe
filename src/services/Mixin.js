export default {
	methods: {
		notiManager(status) {
			const returnMessage = { message: "", typeRetuen: "" };
			switch (true) {
				case status == 200:
					returnMessage.message("Success!");
					returnMessage.typeRetuen("success");
					break;
				case status >= 400 && status < 500:
					returnMessage.message("Success!");
					returnMessage.typeRetuen("error");
					break;
			}
			// return returnMessage;
			this.$waveui.notify(message, typeReturn);
		},
	},
};
