import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import CustomEditor from "./components/CustomEditor/CustomEditor";
import Home from './screens/Home';

export const App = () => {
  return (
		<>
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/write">Write</Link>
						</li>
						<li>
							<Link to="/blogs">My Blogs</Link>
						</li>
					</ul>


          <Switch>
            <Route  path='/'>
              <Home/>
            </Route>
            <Route  path='/write'>
              <CustomEditor/>
            </Route>
          </Switch> 
				</div>

				<CustomEditor />
			</Router>
		</>
  );
};
