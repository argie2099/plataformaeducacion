import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Organisms/Nav';
import Page404 from './Pages/Page404';
import Clase from './Pages/Protected/Clase';
import Curso from './Pages/Protected/Curso';
import Cursos from './Pages/Protected/Cursos';
import Especialidad from './Pages/Protected/Especialidad';
import Especialidades from './Pages/Protected/Especialidades';
import Home from './Pages/Protected/Home';
import Profesores from './Pages/Protected/Profesores';
import Login from './Pages/Public/Login';
import Register from './Pages/Public/Register';
import Protected from './Routes/Protected';
import Public from './Routes/Public';


const App = () => (
  <Router >
    <Nav />
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/especialidades" exact component={Especialidades} />
      <Protected path="/especialidades/:id" component={Especialidad} />
      <Protected path="/cursos" exact component={Cursos} />
      <Protected path="/cursos/:id" component={Curso} />
      <Protected path="/profesores" exact component={Profesores} />
      <Protected path="/clase/:id" exact component={Clase} />

      <Public path="/login" exact component={Login} />
      <Public path="/register" exact component={Register} />
      <Route component={Page404} />
    </Switch>
  </Router>
)

export default App;
