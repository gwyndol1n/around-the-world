import React from "react"
import ReactDOM from "react-dom"
import CharacterSelect from "./App.js"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

class BootstrapCDN extends React.Component {
	render() {
		return (
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
				crossOrigin="anonymous"
			/>
		)
	}
}

ReactDOM.render(
	[<BootstrapCDN/>, <CharacterSelect />],
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
