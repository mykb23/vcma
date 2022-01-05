import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarWithHeader from '../components/sidebar-menu/SidebarWithHeader'

const DashboardLayout = () => {
    return (
        <React.Fragment>
            <SidebarWithHeader>
                <Outlet />
            </SidebarWithHeader>
        </React.Fragment>
    )
}

export default DashboardLayout
