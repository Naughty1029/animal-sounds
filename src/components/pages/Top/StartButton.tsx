/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css, jsx } from '@emotion/react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const buttonStyle = css`
  font-size: 30px;
  margin-top: 30px;
  width: 100%;
  max-width: 300px;
  padding: 0;
`
const hrefResetStyle = css`
  color: #fff;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 15px 0;
`

interface Props {
  children: string
  startFlag: boolean
}

export const StartButton: React.VFC<Props> = (props) => {
  return (
    <Button css={buttonStyle} variant="contained" disabled={props.startFlag}>
      <Link css={hrefResetStyle} to="/quiz">
        {props.children}
      </Link>
    </Button>
  )
}
