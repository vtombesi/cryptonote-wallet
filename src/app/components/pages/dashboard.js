import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';

import '../../../style/style.scss';

import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class DashboardComponent extends Component {

	render() {

    const style = {
      width: '90%',
      margin: '5%',
      padding: 15,
      textAlign: 'center',
      display: 'inline-block',
    };

		return (
      <div>
        <Paper style={style} zDepth={2} rounded={false}>
          <h2>Your wallet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam earum eveniet facere fuga iure laborum maxime, neque nobis odio officiis, perferendis sequi similique, sit tempore ullam vero voluptate voluptates.
          </p>
        </Paper>

        <Paper style={style} zDepth={2} rounded={false}>
          <h2>Last outgoing tx</h2>

        </Paper>

        <Paper style={style} zDepth={2} rounded={false}>
          <h2>Last incoming tx</h2>

        </Paper>
      </div>
		);
	}
}

export default DashboardComponent;
