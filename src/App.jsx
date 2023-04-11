import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile.jsx'

function App() {
	const [count, setCount] = useState(0)

	// Uppgift:
	// visa ett formulär "user profile"
	// - namn
	// - hemstad
	// - favoritfärg
	return (
		<div className="App">
			<h1> Formulär demo </h1>
			<UserProfile />
		</div>
	)
}

export default App
