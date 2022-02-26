import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Top } from 'components/pages/Top/Top'
import { Quiz } from 'components/pages/Quiz/Quiz'

export const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </BrowserRouter>
  )
}
