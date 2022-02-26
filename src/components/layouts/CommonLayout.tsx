/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { mq } from 'components/settings/MediaQuery'

interface Props {
  children: ReactNode
}

export const CommonLayout: React.VFC<Props> = (props) => {
  return <STitleBg>{props.children}</STitleBg>
}

const STitleBg = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/images/title_bg.jpg);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
