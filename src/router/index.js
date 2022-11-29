import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from '../pages/Search'


const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Search/>}/>
        </Routes>
        </BrowserRouter>

    )
}


export default Router;