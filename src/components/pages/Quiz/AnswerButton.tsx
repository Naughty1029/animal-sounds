/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

const buttonStyle = css`
  font-size: 30px;
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
`

type Props = {
  children: string
  sound: string
  checkAnswer: (value: string) => void
}

export const AnswerButton: React.VFC<Props> = ({
  children,
  sound,
  checkAnswer,
}) => {
  return (
    <Button
      css={buttonStyle}
      variant="contained"
      onClick={() => checkAnswer(sound)}
    >
      {children}
    </Button>
  )
}
