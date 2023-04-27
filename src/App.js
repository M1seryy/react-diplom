import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Reg from "./components/Registration/Reg";
import { useDispatch, useSelector } from "react-redux";
import Courses from "./components/Courses/Courses";
import Favourite from "./components/Favourite/Favourite";
import CardPage from "./components/CardPage/CardPage";
import Links from "./components/Links/Links";
import Profile from "./components/Profile/Profile";

function App() {
  // const tokenSelector = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const data = useSelector((item) => item.auth.data);
  const LESSONS_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/products`;
  const [lessons, setLessons] = useState([]);
  const getLessons = async () => {
    const response = await axios.get(LESSONS_URL);
    setLessons(response.data);
  };
  useEffect(() => {
    getLessons();
  }, []);
  dispatch({ type: "add_lessons", payload: lessons });
  return (
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route
          path="/courses/*"
          element={
            <Courses setData={setLessons} lessons={lessons} data={data} />
          }
        />
         <Route path="/profile/*" element={<Profile/>} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/card/:id/*" element={<CardPage />} />
      </Routes>
    </div>
  );
}

export default App;
