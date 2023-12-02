import { BrowserRouter , Route, Routes} from "react-router-dom"
import LoginForm from "./components/login-form"
import HomePage from "./components/home-page"


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/rota" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}