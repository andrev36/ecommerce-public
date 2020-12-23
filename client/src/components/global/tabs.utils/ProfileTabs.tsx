import { Box, Tab, Tabs, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import { globalTheme } from '..'
import MyProfileImage from '../../../assets/images/myProfile/working-with-laptop-2080962-0.svg'
import { DeleteUserForm } from './DeleteForm'

interface TabPanelProps {
 children?: React.ReactNode
 index: number
 value: number
}

const TabPanel: React.FC<TabPanelProps> = ({
 children,
 value,
 index,
 ...other
}) => {
 return (
  <Typography
   component='div'
   role='tabpanel'
   hidden={value !== index}
   id={`vertical-tabpanel-${index}`}
   aria-labelledby={`vertical-tab-${index}`}
   {...other}
  >
   {value === index && <Box p={3}>{children}</Box>}
  </Typography>
 )
}

const useStyles = makeStyles((theme: Theme) => ({
 root: {
  flexGrow: 1,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  height: 700,
 },
 tabs: {
  borderRight: `1px solid ${theme.palette.divider}`,
 },
}))

const a11yProps = (index: number) => {
 return {
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
 }
}

interface Props {
 value: number
 handleChange(event: React.ChangeEvent<{}>, newValue: number): void
 checkoutsList: JSX.Element[]
}

export const ProfileTabs: React.FC<Props> = ({
 value,
 handleChange,
 checkoutsList,
}) => {
 const classes = useStyles()
 return (
  <div
   className={classes.root}
   style={{ backgroundColor: `${globalTheme.SECOND_COLOR}` }}
  >
   <Tabs
    orientation='vertical'
    value={value}
    onChange={handleChange}
    aria-label='Vertical tabs example'
    className={classes.tabs}
   >
    <Tab label='My ordered items' {...a11yProps(0)} />
    <Tab label='Delete account' {...a11yProps(1)} />
   </Tabs>
   <TabPanel value={value} index={0}>
    <div>
     <img
      src={MyProfileImage}
      alt='my profile'
      style={{ width: '15rem', height: '15rem', margin: '2rem' }}
     />
    </div>
    <h1>My purchased items (Work in progress):</h1>
    <section>{checkoutsList}</section>
   </TabPanel>
   <TabPanel value={value} index={1}>
    <DeleteUserForm />
   </TabPanel>
  </div>
 )
}
