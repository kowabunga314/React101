'use client'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

export default function AppSideBar() {
    return (
        <Sidebar>
            <Menu>
            <MenuItem>Foo</MenuItem>
            <SubMenu label='Wumbo'>
                <MenuItem>Mini</MenuItem>
            </SubMenu>
            <MenuItem>Bar</MenuItem>
            </Menu>
        </Sidebar>
    )
}