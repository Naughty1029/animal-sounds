/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '@emotion/styled'
import { CommonLayout } from 'components/layouts/CommonLayout'
import { mq } from 'components/settings/MediaQuery'
import { BasicModal } from './OpeningModal'
import { StartButton } from './StartButton'

export const Top: React.VFC = () => {
  return (
    <>
      <CommonLayout>
        <STitleBand>
          <STitle>
            おとあてげーむ！
            <br />
            いきものどーれだ？
          </STitle>
          <StartButton>はじめる</StartButton>
        </STitleBand>
      </CommonLayout>
      <BasicModal />
    </>
  )
}

const STitleBg = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/assets/images/title_bg.jpg);
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const STitleBand = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 40px 0;
  width: 100%;
  text-align: center;
`

const STitle = styled.h1`
  font-size:40px;
  line-height:1.5;
  font-weight:bold;
  ${mq[0]}{
    font-size:30px;
  },
`
