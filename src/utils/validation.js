function isValidFullName(fullName) {
	if (fullName.length < 5) {
		return [false, 'Minst 5 tecken tack'];
	}
	if (!fullName.includes(' ')) {
		// Exempel på dåliga felmeddelanden:
		// 'Mellanslag saknas'
		return [false, 'Vänligen fyll i både för- och efternamn.']
	}
	// För att fungera internationellt, eller med svårare affärslogik, behöver man använda regex (reguljära uttryck)
	const allowedChars = ' abcdefghijklmnopqrstuvwxyzåäö'
	for (let i = 0; i < fullName.length; i++) {
		let c = fullName.charAt(i).toLowerCase()
		if (!allowedChars.includes(c)) {
			return [false, 'Vänligen använd bara bokstäver.']
		}
	}

	return [true, '']
}

export { isValidFullName }
