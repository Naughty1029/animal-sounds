/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '@emotion/styled'
import { mq } from 'components/settings/MediaQuery'
import { RestartButton } from './RestartButton'

export const Done: React.VFC = () => {
  return (
    <>
      <STitleBand>
        <STitle>
          おしまーい!
          <br />
          またあそんでね!
        </STitle>
        <RestartButton>もういっかい</RestartButton>
      </STitleBand>
    </>
  )
}

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
