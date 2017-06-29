import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Editor from '../editor';

class PostNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			body: ""
		}
	}




	handleChange(value) {
    this.setState({ body: value })
  }

	render() {

		return(
			<section>
				<h1>Hello from the new Post Page</h1>

				<div>
					<Editor placeholder={'Post body...'}/>
				</div>
			</section>
		);
	}
}

export default withRouter(PostNew);