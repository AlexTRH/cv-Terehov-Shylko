import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../header/header'
import * as Styled from './layout.styles'

const Layout = () => {
  return (
    <>
      <Header />
      <Styled.Layout maxWidth="xl">
          <Outlet />
      </Styled.Layout>
    </>
  )
}

export default memo(Layout)
