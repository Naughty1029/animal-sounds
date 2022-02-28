import styled from '@emotion/styled'

export const NotFoundPage: React.VFC = () => {
  return (
    <SDiv>
      <SText>
        404 NotFound
        <br />
        お探しのページは見つかりませんでした。
      </SText>
    </SDiv>
  )
}

const SDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const SText = styled.p`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
`
