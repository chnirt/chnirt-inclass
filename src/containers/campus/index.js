import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Drawer from '@material-ui/core/Drawer'

import Toolbar from './toolbar'
import AccountTable from './table'
import AccountsDetail from '../accountsDetail'
import Breadcrumb from '../../components/breadcrumb'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'students', label: 'Students', minWidth: 100 }
]

function createData(name, students) {
  return { name, students }
}

const rows = [
  createData('Class 1', 66),
  createData('Class 2', 67),
  createData('Class 3', 68),
  createData('Class 4', 69)
]

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    minHeight: 'calc(100vh - 168px)'
  },
  breadcrumb: {
    padding: theme.spacing(1)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto'
  }
}))

function index(props) {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [id, setId] = useState(null)
  const [drawer, setDrawer] = useState(false)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleDetail = idRow => {
    setDrawer(true)
    setId(idRow)
  }

  const toggleDrawer = open => event => {
    setDrawer(open)
  }

  return (
    <div className={classes.root}>
      <div className={classes.breadcrumb}>
        <Breadcrumb>Campus</Breadcrumb>
      </div>

      <Toolbar />

      <div className={classes.content}>
        <AccountTable
          columns={columns}
          rows={rows}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleDetail={handleDetail}
        />
      </div>

      <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
        <AccountsDetail id={id} toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  )
}

export default index
