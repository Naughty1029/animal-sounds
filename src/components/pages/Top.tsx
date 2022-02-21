import { Link } from 'react-router-dom'
export const Top: React.VFC = () => {
  return (
    <>
      <h1>Top Page</h1>
      <button>
        <Link to="/quiz">Start</Link>
      </button>
    </>
  )
}
