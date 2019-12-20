import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Loading from '../../components/loading'
import './styles.css'

export default function Root(props) {
  const { routes } = props

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes &&
            routes.map(route => (
              <Route
                key={route.label}
                {...route}
                component={routeProps => {
                  const LazyComponent = React.lazy(() =>
                    import(`../${route.component}`)
                  )
                  return (
                    <LazyComponent
                      {...routeProps}
                      {...route}
                      routes={route.routes}
                    />
                  )
                }}
              />
            ))}
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    </>
  )
}
