/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react'
import Button from '@mui/material/Button'

const buttonStyle = css`
  font-size: 30px;
  margin-top: 30px;
  width: 100%;
  padding: 10px 0;
`

interface Props {
  children: string
}

export const AnswerButton: React.VFC<Props> = (props) => {
  return (
    <Button css={buttonStyle} variant="contained">
      {props.children}
    </Button>
  )
}
