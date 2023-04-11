import './UserProfile.css'

const UserProfile = () => {


	const handleSubmit = event => {
		event.preventDefault()
	}

	return (
		<form className="user-profile">
		
			<div className="field-group">
			<label> Namn </label>
			<input type="text" />
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
