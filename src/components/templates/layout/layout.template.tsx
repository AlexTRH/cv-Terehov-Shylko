import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Breadcrumbs } from '../../features/breadcrumbs'
import Header from '../../header/header'
import * as Styled from './layout.styles'

const Layout = () => {
  return (
    <>
      <Header />
      <Styled.Layout maxWidth="xl">
        {/* <Breadcrumbs /> */}
          <Outlet />
      </Styled.Layout>
    </>
  )
}

export default memo(Layout)
