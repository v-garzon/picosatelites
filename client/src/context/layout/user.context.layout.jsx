import { Outlet } from 'react-router-dom'

import { UserContextProvider } from '../user.context'

const UserContextLayout = () => {
  return (
    <UserContextProvider>
        <Outlet />
    </UserContextProvider>
  )
}

export default UserContextLayout