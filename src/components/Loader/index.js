import React, { Component } from 'react'

class Loader extends React.Component {
	render() {
		console.log('i proslijeden')
		if (!this.props.showSpinner) {
			return null;
		}
		return (<section className="loader-box">
            <span className="loader"></span>
           </section>);
	}
}

export default Loader;