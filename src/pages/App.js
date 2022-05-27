import React from 'react';
import { PagesContainer } from '../components/PagesContainer.js';
import Header from '../components/Header';
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Cursor from '../components/Cursor';
import Footer from '../components/Footer';
import { Theme } from '../components/Theme.js';

class App extends React.Component {
	componentDidMount() {
		const removeFouc = (foucElement) => {
			foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
		};

		removeFouc(document.documentElement);
	}
	render() {
		return (
			<Theme>
				<PagesContainer>
					<Cursor />
					<Header />
					<Landing />
					<AboutUs />
					<Services />
					<Footer />
				</PagesContainer>
			</Theme>
		);
	}
}

export default App;
