// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'

class Login extends Component {
  onClickLogin = () => {
    const {history} = this.props
    Cookies.set('jwt_token', 'JWT token', {expires: 30})
    history.replace('/')
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="login-page">
          <h1>Please Login</h1>
          <button type="button" onClick={this.onClickLogin}>
            Login with Sample Creds
          </button>
        </div>
      </>
    )
  }
}
export default Login
