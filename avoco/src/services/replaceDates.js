export default (events) => {
	for (let event of events) {
		event.eventDateTime = new Date(event.eventDateTime);
	}
}