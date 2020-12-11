import {Switch , Route} from 'react-router-dom';
import Team from './ComposeTeam/Team';
import Header from './Header/Header';
import Quarter from './FirstQuarter/Quarter';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Team}/>
        <Route exact path="/Quarter" component={Quarter}/>
      </Switch>
    </div>
  );
}

export default App;
