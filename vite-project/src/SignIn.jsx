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
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
            </>
            
          )
      }
}

export default SignIn