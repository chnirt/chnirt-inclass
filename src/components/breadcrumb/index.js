import React from 'react'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function index(props) {
  const { children } = props

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        to="/dashboard"
        style={{
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        Dashboard
      </Link>
      {children && <Typography color="textPrimary">{children}</Typography>}
    </Breadcrumbs>
  )
}
