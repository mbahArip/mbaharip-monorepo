export const formatDate = (
	date: Date,
	includeHours: boolean = true,
	includeDate: boolean = true,
) => {
	const d = new Date(date);

	const formatOptions = {};
	if (includeHours) {
		formatOptions['hour'] = 'numeric';
		formatOptions['minute'] = 'numeric';
		formatOptions['hour12'] = false;
	}
	if (includeDate) {
		formatOptions['year'] = 'numeric';
		formatOptions['month'] = 'short';
		formatOptions['day'] = 'numeric';
	}
	const newDate = new Intl.DateTimeFormat('en', formatOptions);
	return newDate.format(d);
};
