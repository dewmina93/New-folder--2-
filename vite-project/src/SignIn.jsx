import {Link} from 'react-router';
function SignIn(props) {
    switch (props.status) {
        case 'signin':
          return (
            <>
            <h2>Hi, {props.name}</h2>
            </>
          )
        default:
          return (
            <>
            <Link to="/signIn">Sign In</Link>
            <Link to="/signUP">Sign Up</Link>
           
            </>
            
          )
      }
}

export default SignIn