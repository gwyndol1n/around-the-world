import React from "react"
import "./App.css"

import styled from "styled-components"
import Hashids from "hashids"
import {
	Button,
	Container,
	FormControl,
	FormLabel,
	InputGroup,
	OverlayTrigger,
	Tooltip,
} from "react-bootstrap"

export const Grid = styled.div``
export const Row = styled.div`
	display: flex;
	justify-content: center;
`
export const Col = styled.div`
	flex: ${(props) => props.size};
`

const hashids = new Hashids("melee")

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
		this.myRef = React.createRef()
		this.copyToClipboard = this.copyToClipboard.bind(this)
	}

	copyToClipboard(e) {
		e.target.select()
		document.execCommand("copy")
	}

	render() {
		return (
			<InputGroup>
				<OverlayTrigger
					target={this.myRef}
					trigger="focus"
					delay={{ show: 200, hide: 400 }}
					placement="top"
					overlay={<Tooltip id="copied">Copied!</Tooltip>}
				>
					<FormControl
						ref={this.myRef.current}
						className="text-center character-input"
						style={{ fontFamily: "Consolas" }}
						plaintext
						readOnly
						defaultValue={this.props.value}
						onClick={this.copyToClipboard}
						placeholder="Share"
					/>
				</OverlayTrigger>
			</InputGroup>
		)
	}
}

class CharacterSelect extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			characterOrder: [
				[0, "bowser"],
				[1, "captain-falcon"],
				[2, "donkey-kong"],
				[3, "dr-mario"],
				[4, "falco"],
				[5, "fox"],
				[6, "ganondorf"],
				[7, "ice-climbers"],
				[8, "jigglypuff"],
				[9, "kirby"],
				[10, "link"],
				[11, "luigi"],
				[12, "mario"],
				[13, "marth"],
				[14, "mewtwo"],
				[15, "mr-game-and-watch"],
				[16, "ness"],
				[17, "peach"],
				[18, "pichu"],
				[19, "pikachu"],
				[20, "roy"],
				[21, "samus"],
				[22, "sheik"],
				[23, "yoshi"],
				[24, "young-link"],
				[25, "zelda"],
			],
			characterElements: { 1: [], 2: [], 3: [] },
			shareString: "",
			generated: false,
			input: null
		}

		this.handleCharacterChange = this.handleCharacterChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleCharacterChange(newOrder) {
		// set character order via newOrder
		this.setCharacterOrder(newOrder, this.state.characterOrder)
		// generate share string
		let shareString = hashids.encode(
			this.state.characterOrder.map((item) => item[0])
		)

		let characterElements = {
			1: this.state.characterOrder.slice(0, 9).map((character, index) => {
				return (
					<Col>
						<CharacterIcon
							key={character[1]}
							character={character[1]}
						/>
					</Col>
				)
			}),
			2: this.state.characterOrder
				.slice(9, 18)
				.map((character, index) => {
					return (
						<Col>
							<CharacterIcon
								key={character[1]}
								character={character[1]}
							/>
						</Col>
					)
				}),
			3: this.state.characterOrder
				.slice(18, this.state.characterOrder.length + 1)
				.map((character, index) => {
					return (
						<Col>
							<CharacterIcon
								key={character[1]}
								character={character[1]}
							/>
						</Col>
					)
				}),
		}

		this.setState({
			characterOrder: this.state.characterOrder,
			characterElements: characterElements,
			shareString: shareString,
			generated: true,
		})
	}

	handleChange(e) {
		this.setState({input: e.target.value})
	}

	handleClick(e) {
		this.handleCharacterChange(
			this.state.input ? hashids.decode(this.state.input) : this.shuffleCharacters(this.state.characterOrder)
		)
	}

	// Utility function that returns randomized list of indices
	shuffleCharacters(arr) {
		let newArr = arr.slice(0)
		for (var i = arr.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1))
			var temp = newArr[i]
			newArr[i] = newArr[j]
			newArr[j] = temp
		}
		return newArr.map((item) => item[0])
	}

	// sets order of character list via provided list of indices
	setCharacterOrder(order, characters) {
		characters.sort(function (a, b) {
			return order.indexOf(a[0]) - order.indexOf(b[0])
		})
	}

	render() {
		return (
			<Container fluid="sm" className="text-center">
				<Row>
					<InputGroup className="col-md-6 col-md-offset-3">
						<InputGroup.Prepend>
							<InputGroup.Text>Shared code</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							type="text"
							onChange={this.handleChange}
						/>
						<InputGroup.Append>
							<Button
								onClick={this.handleClick}
								variant="outline-secondary"
							>
								Generate
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Row>
				<Grid className="p-2">
					<Row>{this.state.characterElements[1]}</Row>
					<Row>{this.state.characterElements[2]}</Row>
					<Row style={{ marginLeft: 15 }}>
						{this.state.characterElements[3]}
					</Row>
					<Row className="col-md-12">
						<CharacterShare
							className="mx-auto"
							value={this.state.shareString}
						/>
					</Row>
				</Grid>
			</Container>
		)
	}
}

class CharacterInput extends React.Component {
	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.props.onClickProps()
	}

	render() {
		return (
			<Button
				onClick={this.handleChange}
				variant="outline-secondary"
				size="sm"
			>
				Generate
			</Button>
		)
	}
}

export default CharacterSelect
