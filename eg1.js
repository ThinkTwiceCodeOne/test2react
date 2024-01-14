import React from 'react'
import {withStyles} from '@material-ui/styles'
import { createTheme } from '@mui/material';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import ListSubHeader from '@mui/material/ListSubheader'
import { Icon } from '@mui/material';
const myStyles=(theme)=>{
    return ({
        mainContainer:{
            flexGrow:1
        },
        appBarSpacer:theme.mixins.toolbar,
        content:{
            padding:'10px'
        },
        appBar:{
            zIndex:theme.zIndex.drawer+1000
        }
    })
}

const App42=(props)=>{
    const [tabIndex,setTabIndex]=React.useState(0);
    const [RouteComponent,setRouteComponent]=React.useState(HomeComponent)
    const [showDrawer,setShowDrawer]=React.useState(false);
    const onTabChange=(ev,val)=>{
        setShowDrawer(false);
        if(val===tabIndex) return;
        setTabIndex(val);
        if(val==0) setRouteComponent(HomeComponent)
        else if(val==1) setRouteComponent(CourseComponent)
        else if(val==2) setRouteComponent(ContactComponent)
    }
    const openDrawer=()=>{
        setShowDrawer(true);
    }
    return (
        <BrowserRouter>
        <div className={props.className.mainContainer}>
            <AppBar className={props.classes.appBar}>
                <Toolbar>
                    <IconButton color='inherit' onClick={openDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <Tabs value={tabIndex} onChange={onTabChange}>
                        <Tab label='Home'/>
                        <Tab label='Courses'/>
                        <Tab label='Contact Us'/>
                    </Tabs>
                </Toolbar>
            </AppBar>
            <Drawer variant='variant' open={showDrawer} onClick={()=>{setShowDrawer(!showDrawer);}}>
                <Toolbar/>
                <List>
                    <ListItem component={Link} onClick={()=>{onTabChange(null,0);setShowDrawer(!showDrawer);}}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListSubHeader>Sub Heading</ListSubHeader>
                    <ListItem component={Link} onClick={()=>{onTabChange(null,1);setShowDrawer(!showDrawer);}}>
                        <ListItemText>Courses</ListItemText>
                    </ListItem>
                    <ListItem component={Link} onClick={()=>{onTabChange(null,2);setShowDrawer(!showDrawer);}}>
                        <ListItemText>Contact Us</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <div className={props.classes.appBarSpacer}></div>
            <div className={props.classes.content}>
                <Routes>
                <Route path='/' exact component={RouteComponent}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}
const HomeComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
            <h1>Home</h1>
            <h3>Welcome</h3>
        </div>
    )
})
const CourseComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
            <h1>Courses</h1>
            <h3>List of courses</h3>
        </div>
    )
})
const ContactComponent=withStyles(myStyles)(({classes})=>{
    return(
        <div>
            <h1>Contact Us</h1>
            <h3>7868251056</h3>
        </div>
    )
})
export default withStyles(myStyles)(App42);
