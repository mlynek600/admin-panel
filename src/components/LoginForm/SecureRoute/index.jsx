import { Route, Redirect } from 'react-router-dom'

const SecureRoute = props => {
  const isAuthenticated = sessionStorage.getItem('isAuthenticated')
  const loginPath = '/Login'

  if (!isAuthenticated) {
    const renderComponent = () => <Redirect to={{ pathname: loginPath }} />

    return <Route {...props} component={renderComponent} render={undefined} />
  }

  return <Route {...props} />
}

export default SecureRoute
