export function notiManager(status) {
	// const returnMessage = { message: "", typeRetuen: "" };
	const message = "";
	const typeReturn = "";
	switch (true) {
		case status == 200:
			message("Success!");
			typeRetuen("success");
			break;
		case status >= 400 && status < 500:
			message("Success!");
			typeRetuen("error");
			break;
	}
	return $waveui.notify(message, typeReturn);
}
