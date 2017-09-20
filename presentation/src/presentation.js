// Import React
import React from "react";

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text,
	Image,
	Appear,
	CodePane,
	Link,
	Fit,
	Fill,
	Layout,
	Notes
} from "spectacle";
import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import preloader from "./utils/preloader";
import CodeSlide from 'spectacle-code-slide';


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
	wildwest: require("./assets/wild_west.jpg"),
	codeDevBG: require("./assets/video_editor_photo.jpeg"),
	nodeLogo: require("./assets/nodelogo.svg"),
	reactLogo: require("./assets/reactLogo.svg"),
	htmlLogo: require("./assets/HTML5_Logo_512.png"),
	redOcean: require("./assets/RedOcean.jpg"),
	clot: require("./assets/Clot.jpg"),
	wilcox: require("./assets/karate-master-wilcox.jpg")
};

preloader(images);

const theme = createTheme({
	primary: "white",
	secondary: "#00FDBA",
	tertiary: "#03A9FC",
	quartenary: "#CECECE"
}, {
	primary: "Inconsolata",
	secondary: "Helvetica"
});

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
				<Slide transition={["zoom"]} bgImage={images.codeDevBG} bgDarken={.6}>
					<Heading style={{border: '10px solid white'}} size={1} textColor="primary">Thinking in React</Heading>
					<Heading size={4} fit lineHeight={1} margin="0 0 70px 0" textColor="primary">
						Wait, wait...don't tell me!
					</Heading>
					<Image src={images.nodeLogo} width="200px" margin="0 20px 0 0"/>
					<Image src={images.reactLogo} width="200px"/>
					<Image src={images.htmlLogo} width="200px"/>
				</Slide>
				<Slide transition={["spin"]} bgImage={images.codeDevBG} bgDarken={.7}>
					<Text margin="50px 0 50px 0" textColor="primary" size={3}  bold> @researchnow</Text>
					<Text margin="50px 0 50px 0" textColor="primary" size={3}  bold> researchnow.com/careers</Text>
				</Slide>
				<Slide transition={["spin"]} bgImage={images.codeDevBG} bgDarken={.7}>
					<Text textColor="primary" size={3}  bold>Some generous folk</Text>
					<Layout>
						<Fill>
							<List ordered start={2} type="A">
								<Appear fid="1">
									<Text margin="50px 0 50px 0" textColor="primary" size={3}> Jeziel Jones</Text>
								</Appear>
								<Appear fid="2">
									<Text margin="50px 0 50px 0" textColor="primary" size={3}> Mike Wilcox</Text>
								</Appear>
								<Appear fid="3">
									<Text margin="50px 0 50px 0" textColor="primary" size={3}> Chase Deanda</Text>
								</Appear>
								<Appear fid="4">
									<Text margin="50px 0 50px 0" textColor="primary" size={3}> Eugene Lazutkin</Text>
								</Appear>
								<Appear fid="5">
									<Text margin="50px 0 50px 0" textColor="primary" size={3}> Dawn Nguyen</Text>
								</Appear>
								<Appear fid="6">
									<Text margin="50px 0 50px 0" textColor="primary" size={3}> Christie Holder</Text>
								</Appear>
							</List>
						</Fill>
						<Fill>
							<Appear fid="7">
								<Text margin="50px 0 50px 0" textColor="primary" size={3}>PIC RN TECH ORG HERE</Text>
							</Appear>
						</Fill>
					</Layout>
				</Slide>
				<Slide transition={["spin"]} bgImage={images.wildwest}>
				</Slide>
				<Slide transition={[ "spin", "slide" ]} bgImage={images.codeDevBG} bgDarken={.6}>
				<Notes>
					<h4>Slide notes</h4>
					<ol>
						<li>Ask RN team members to help out quickly with installs</li>
					</ol>
				</Notes>
					<Heading size={ 2 } caps fit textColor="tertiary">INSTALLATION</Heading>
					<Terminal
						title="1. salgoodman@rn: ~(zsh)"
					  	output={[
					  		"install node & npm",
							<Link
								textColor="primary"
								href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">
								Install React Dev Tools
							</Link>,
							"npm install -g create-react-app"
						]}
					/>
				</Slide>
				<Slide transition={["fade"]} bgImage={images.codeDevBG} bgDarken={.6} textColor="primary">
					<Notes>
						<h4>Slide notes</h4>
						<ol>
							<li>Now would be a great time to get more snacks or the such before we get rolling.</li>
						</ol>
					</Notes>
					<BlockQuote>
						<Quote>The whole is greater than the sum of its parts.</Quote>
						<Cite textColor="secondary">Aristotle</Cite>
					</BlockQuote>
				</Slide>
				<Slide transition={["spin"]} bgImage={images.codeDevBG} bgDarken={.6}>
					<Heading size={3} textColor="primary">Hx</Heading>
					<Text textColor="primary" size={4}>ReactJS, created in 2012 by Facebook, is a javascript library for creating dynamic user interfaces. The React methodology emphasizes creating small components, with declarative parent-child relationships, that combine through "component composition" to build the overall view of an application. </Text>
				</Slide>
				<CodeSlide
					transition={[]}
					lang="js"
					code={require("./assets/examplecode1.js").default}
					ranges={[
						{ loc: [0, 20], title: "A small react component" },
						{ loc: [3, 14] },
						{ loc: [11, 16], title: "STEP 1", note: "ReactDOM.render(reactElement, domContainerNode, [callback])" },
						{ loc: [5, 10] },
					]}>
					<Notes>
						<h4>Slide notes</h4>
						<ol>
							<li>ReactDOM.render = API for rendering into the DOM aka connecting React to outside world.</li>
							<li>A React element is an object representaiton of a dom node; it is a description of what you'll see in the UI, but not the exact thing. By passing around objects React is able to do some sexy fast things taht eugene will speak more on later.</li>
							<li>Odds are if you’ve been using React for any amount of time, you don’t use
								React.createElement to create your object representations of the DOM.
								Instead, you’re probably using JSX. Earlier I wrote “The primary reason for the
								confusion is that there’s an often un-talked about abstraction layer between JSX
								and what’s actually going on in React land.”. This abstraction layer is that JSX is
								always going to get transpiled to React.createElement invocations (typically) via Babel.
							</li>
					</ol>
					</Notes>
				</CodeSlide>
				<CodeSlide
					transition={[]}
					lang="js"
					code={require("./assets/examplecode1a.js").default}
					ranges={[
						{ loc: [0, 20], title: "Transpiles into" },
					]}>
					<Notes>
						<h4>Slide notes</h4>
						<ol>
							<li>Javascript objects</li>
						</ol>
					</Notes>
				</CodeSlide>
				<CodeSlide
					transition={[]}
					lang="js"
					code={require("./assets/examplecode1b.js").default}
					ranges={[
						{ loc: [0, 20], title: "IN HTML looks like" },
					]}>
					<Notes>
						<h4>Slide notes</h4>
						<ol>
							<li>slide notes</li>
						</ol>
					</Notes>
				</CodeSlide>
				<Slide transition={["spin"]} bgImage={images.codeDevBG} bgDarken={.6}>
					<Heading size={3} textColor="primary">Chase Deanda</Heading>
					<Heading size={5} textColor="primary">Passing typeof Proptypes !== function</Heading>
				</Slide>
				<CodeSlide
					transition={[]}
					lang="js"
					code={require("./assets/componentExample.js").default}
					ranges={[
						{ loc: [0, 270], title: "Building a component 2017 way" },
					]}
				/>
				<Slide transition={["spin"]} bgImage={images.codeDevBG} bgDarken={.6}>
					<Heading size={3} textColor="primary">Virtual DOM</Heading>
					<Heading size={5} textColor="primary">Eugene Lazutkin</Heading>
				</Slide>
				<Slide transition={["spin"]} bgImage={images.codeDevBG} bgDarken={.6}>
					<Heading size={3} textColor="primary">Puttin' it all together</Heading>
					<Heading size={5} textColor="primary">Mike Wilcox</Heading>
					<Image src={images.wilcox} width="200px" margin="0 20px 0 0"/>
				</Slide>
				<CodeSlide
					transition={[]}
					lang="js"
					code={require("./assets/calculator.js").default}
					ranges={[
						{ loc: [0, 270], title: "Walking through some code" },
						{ loc: [0, 1], title: "The Beginning" },
						{ loc: [1, 2] },
						{ loc: [1, 2], note: "Heres a note!" },
						{ loc: [2, 3] },
						{ loc: [8, 10] },
					]}
				/>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={6} textColor="secondary" caps>Sources</Heading>
					<List>
						<ListItem>https://tylermcginnis.com/react-elements-vs-react-components/</ListItem>
						<ListItem>https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176</ListItem>
						<ListItem>https://reactdom.com/issues/55</ListItem>
						<ListItem>Stephen Grider, Tyler McGinnis, Dan Abramov, Eric Elliott</ListItem>
					</List>
				</Slide>
			</Deck>
		);
	}
}
