import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {login, logout, register} from "actions/user";
import "../../style/style.scss";
import {Header, LeftDrawer, AppBar, MenuItem, Drawer, IconMenu, IconButton, Divider} from "material-ui";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import BottomNavigationNav from '../components/partials/BottomNavigationNav';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh"/>
    <MenuItem primaryText="Help"/>
    <MenuItem primaryText="Sign out"/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {dispatch, redirectUrl} = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      if (this.props.redirectUrl) {
        console.log(`After logging in, going to ${this.props.redirectUrl}`);
        browserHistory.push(this.props.redirectUrl);
      }
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
      console.log('user is logging out');
    }
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    })
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    let {open} = this.state;
    const paddingLeftDrawerOpen = 236;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>

          <AppBar
            title="Wallet"
            onLeftIconButtonClick={this.handleToggle}
            iconElementRight={<Logged />}/>

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open: open})}
          >
            <MenuItem onClick={this.handleClose}>Dashboard</MenuItem>
            <MenuItem onClick={this.handleClose}>Send</MenuItem>
            <MenuItem onClick={this.handleClose}>Receive</MenuItem>
            <MenuItem onClick={this.handleClose}>Transactions</MenuItem>
            <MenuItem onClick={this.handleClose}>Address Book</MenuItem>
            <Divider></Divider>
            <MenuItem onClick={this.handleClose}>Scan QR Code</MenuItem>
            <Divider></Divider>
            <MenuItem onClick={this.handleClose}>Settings</MenuItem>
            <MenuItem onClick={this.handleClose}>Refresh</MenuItem>
            <MenuItem onClick={this.handleClose}>Sign out</MenuItem>
          </Drawer>

          <div>
            {this.props.children}
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    games: state.games,
    prizes: state.prizes,
    scores: state.scores,
    crypto: state.crypto,
    iota: state.iota,
    isLoggedIn: state.user.logged,
    redirectUrl: state.user.redirectURL
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    logout,
    register
  }, dispatch)
};

App.contextTypes = {store: React.PropTypes.object};

export default connect(mapStateToProps, mapDispatchToProps)(App)
