import { useState } from 'react'
import './UserProfile.css'
import { isValidFullName } from '../utils/validation.js'

const UserProfile = () => {
	// state-variabler
	const [name, setName] = useState('')

	// Visa inget förrän användaren fått en chans att fylla i fältet
	// Visa grön check eller rött kryss ✔️❌ om valid/invalid
	// Börja med namn: state-variabler för VÄRDET och clean/dirty

	// Affärslogik: namnet är giltigt om
	// - minst fem tecken
	// - innehålla mellanslag (förnamn+efternamn)
	// - inga siffror, bara bokstäver (och mellanslag)

	const nameIsValid = isValidFullName(name)

	const handleSubmit = event => {
		event.preventDefault()
	}

	return (
		<form className="user-profile">
		
			<div className="field-group">
				<label> Namn </label>
				<div className="field">
					<input type="text"
						value={name}
						onChange={e => setName(e.target.value)}
						/>
					<span>{nameIsValid ? '✔️' : '❌'}</span>
				</div>
			</div>

			<div className="field-group">
			<label> Favoritfärg </label>
			<input type="text" />
			</div>

			<button type="submit" onClick={handleSubmit}> Spara ändringar </button>
		</form>
	)
}

export default UserProfile
