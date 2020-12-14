import React from "react"
import ReactDOM from "react-dom"
import CharacterSelect from "./App.js"
import "./index.css"

class Header extends React.Component {
	render() {
		return (
			<header className="masthead d-flex">
				<div className="container text-center">
					<h2 className="mb-2">Around the World</h2>
					<CharacterSelect />
				</div>
			</header>
		)
	}
}

ReactDOM.render(
	[<Header />],
	document.getElementById("root")
)
