import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import store from "./redux/store.js"
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/movies/:id" element={<MovieDetails />} /> */}
{/* 
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/movies/genre" element={<GenreList />} />
        <Route path="/admin/movies/create" element={<CreateMovie />} />
        <Route path="/admin/movies-list" element={<AdminMoviesList />} />
        <Route path="/admin/movies/update/:id" element={<UpdateMovie />} />
        <Route path="/admin/movies/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/movies/comments" element={<AllComments />} />
      </Route> */}
    </Route>
  )
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
