import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <React.Fragment>
            <meta content="width=device-width, initial scale=1.0"
                name="viewport" />
            <meta content="" name="keywords" />
            <meta content="" name="description" />
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    )
}

export default AppLayout
