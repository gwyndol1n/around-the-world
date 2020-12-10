import React from "react"
import "./App.css"

import styled from "styled-components"
import MD5 from "crypto-js/md5"
import { Button, Container, FormControl, InputGroup } from "react-bootstrap"

export const Grid = styled.div`
`

export const Row = styled.div`
	display: flex;
	justify-content: center;
`
export const Col = styled.div`
	flex: ${(props) => props.size};
`

class CharacterIcon extends React.Component {
	constructor(props) {
		super(props)
		this.character = props.character
		this.icon = "/images/" + this.character + ".png"

		this.state = {
			completed: false,
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState((state) => ({
			completed: !state.completed,
		}))
	}

	render() {
		return (
			<img
				src={this.icon}
				alt={this.character}
				className={this.state.completed ? "inactive" : ""}
				onClick={this.handleClick}
			/>
		)
	}
}

class CharacterShare extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: props.value,
			copied: false
		}

		this.copyToClipboard = this.copyToClipboard.bind(this)
	}

	copyToClipboard(e) {
		e.target.select();
		document.execCommand('copy');
	}

	render() {
		return (
			<Col size={5}>
			<FormControl plaintext readOnly defaultValue={this.state.value} rows={1} onClick={this.copyToClipboard} />
			</Col>
		)
	}
}

class CharacterSelect extends React.Component {
	constructor(props) {
		super(props)
		this.characterStrings = [
			"bowser",
			"captain-falcon",
			"donkey-kong",
			"dr-mario",
			"falco",
			"fox",
			"ganondorf",
			"ice-climbers",
			"jigglypuff",
			"kirby",
			"link",
			"luigi",
			"mario",
			"marth",
			"mewtwo",
			"mr-game-and-watch",
			"ness",
			"peach",
			"pichu",
			"pikachu",
			"roy",
			"samus",
			"sheik",
			"yoshi",
			"young-link",
			"zelda",
		]
		this.shuffleCharacters(this.characterStrings)

		this.characters = this.characterStrings.map((character) => (
			<Col>
				<CharacterIcon key={character} character={character} />
			</Col>
		))

		this.characterShareString = MD5(
			this.characterStrings.join(",")
		).toString()
	}

	shuffleCharacters(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1))
			var temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
	}

	render() {
		return (
			<Container fluid="sm">
				<Grid>
					<Row>{this.characters.slice(0, 9)}</Row>
					<Row>{this.characters.slice(9, 18)}</Row>
					<Row style={{ marginLeft: 15 }}>
						{this.characters.slice(18, this.characters.length + 1)}
					</Row>
					<Row>
					<CharacterShare value={this.characterShareString}/>
					</Row>
					<CharacterInput />
				</Grid>
				
			</Container>
		)
	}
}

class CharacterInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			input: "",
		}
	}

	render() {
		return (
			<InputGroup className="mb-5">
				<FormControl
					size="sm"
					placeholder="enter opponent's code"
					aria-label="enter opponent's code"
				/>
				<InputGroup.Append>
					<Button variant="outline-secondary" size="sm">Generate</Button>
				</InputGroup.Append>
			</InputGroup>
		)
	}
}

export default CharacterSelect
