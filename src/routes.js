import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import WifiIcon from '@material-ui/icons/Wifi'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import AnnouncementIcon from '@material-ui/icons/Announcement'
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel'
import CodeIcon from '@material-ui/icons/Code'
import NotesIcon from '@material-ui/icons/Notes'
import HelpIcon from '@material-ui/icons/Help'
import LanguageIcon from '@material-ui/icons/Language'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import CropFreeIcon from '@material-ui/icons/CropFree'
import ImageIcon from '@material-ui/icons/Image'
import SettingsIcon from '@material-ui/icons/Settings'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessIcon from '@material-ui/icons/Business'

export const routes = [
  {
    label: 'Login',
    path: '/login',
    exact: true,
    component: 'login'
  },
  {
    label: 'App',
    path: '/',
    component: 'apps',
    private: true,
    // eslint-disable-next-line no-sparse-arrays
    routes: [
      {
        label: 'Profile',
        path: '/profile',
        component: 'profile'
      },
      {
        label: 'Dashboard',
        path: '/dashboard',
        component: 'dashboard'
      },
      {
        label: 'Accounts',
        path: '/accounts',
        component: 'accounts',
        exact: true
      },
      {
        label: 'Accounts',
        path: '/accounts/:id',
        component: 'accountsDetail'
      },
      {
        label: 'Campus',
        path: '/campus',
        component: 'campus'
      }
    ]
  }
]

export const pages = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    title: 'Accounts',
    href: '/accounts',
    icon: <PersonIcon />
  },
  {
    title: 'Campus',
    href: '/campus',
    icon: <BusinessIcon />
  }
]
