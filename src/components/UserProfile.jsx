import { useState } from 'react'
import './UserProfile.css'
import { isValidFullName } from '../utils/validation.js'

const UserProfile = () => {
	// state-variabler
	const [name, setName] = useState('')
	const [nameIsDirty, setNameIsDirty] = useState(false)

	// Visa inget förrän användaren fått en chans att fylla i fältet
	// Visa grön check eller rött kryss ✔️❌ om valid/invalid
	// Börja med namn: state-variabler för VÄRDET och clean/dirty

	// Affärslogik: namnet är giltigt om
	// - minst fem tecken
	// - innehålla mellanslag (förnamn+efternamn)
	// - inga siffror, bara bokstäver (och mellanslag)

	const [nameIsValid, nameErrorMessage] = isValidFullName(name)
	const nameClassName = nameIsDirty ? (nameIsValid ? 'valid' : 'invalid') : ''


	const handleSubmit = event => {
		event.preventDefault()
	}

	return (
		<form className="user-profile">
		
			<div className="field-group">
				<label> Namn </label>
				<div className="field">
					<input type="text"
						className={nameClassName}
						value={name}
						onChange={e => setName(e.target.value)}
						onBlur={() => setNameIsDirty(true)}
						/>
					<span>{nameIsDirty ? (nameIsValid ? '✔️' : '❌') : ''}</span>
				</div>
				<span className="display-error-message"> {nameIsDirty ? nameErrorMessage : ''} </span>
			</div>

			<div className="field-group">
				<label> Favoritfärg </label>
				<div className="field">
					<input type="text" />
					<span>  </span>
				</div>
			</div>

			<button type="submit" onClick={handleSubmit}> Spara ändringar </button>
		</form>
	)
}

export default UserProfile
