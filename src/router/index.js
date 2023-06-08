import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from '../pages/Search'
import Users from '../pages/Users'
import User from '../pages/User'
const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Search/>}/>
            <Route path='/users/:username' element={<Users/>}/>
            <Route path='/user/:name' element={<User/>}/>
        </Routes>
        </BrowserRouter>

    )
}


export default Router;