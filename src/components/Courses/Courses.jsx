import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import CardPage from "../CardPage/CardPage";
import CourseItem from "../CourseItem/CourseItem";
import "./Courses.css";

const Courses = ({ lessons, data, setData }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  // const LESSONS_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/products`;
  // const [lessons, setLessons] = useState([]);
  // dispatch({ type: "add_lessons", payload: lessons });
  const [prgressLessons, setProressLessons] = useState([]);
  const [findItem, setFindItem] = useState("");
  const [progCounter, setProgCounter] = useState(0);
  // console.log(data);
  const filterByProgress = () => {
    let newLessons = lessons.filter((item) => {
      return item.inProgress == true;
    });
    setProressLessons(newLessons);
  };
  // const getLessons = async () => {
  //   const response = await axios.get(LESSONS_URL);
  //   setLessons(response.data);
  // };
  const getProgressHandler = () => {
    data.map((item) => {
      if (item.inProgress === true) {
        setProgCounter((prev) => prev + 1);
      }
    });
  };
  useEffect(() => {
    // getLessons();
    getProgressHandler();
  }, []);

  useEffect(() => {}, [lessons]);
  return (
    <section className="courses">
      <div className="container">
        <div className="all-courses">
          <div className="mini-menu">
            <Link to={"/courses"} className="mini-menu-item">
              <p className="courses-type">All: {lessons.length}</p>
            </Link>
            <Link
              to={"/courses/progress"}
              className="mini-menu-item in-progress"
              onClick={() => filterByProgress()}
            >
              <p className="courses-type">In progress: {progCounter}</p>
            </Link>
            <div className="mini-menu-item complete">
              <p className="courses-type">Complete: 0</p>
            </div>
          </div>
          <input
            onChange={(event) => setFindItem(event.target.value)}
            type="text"
            value={findItem}
            className="course-search"
          />
          <div className="all-courses-categories"></div>
          <div className="my-courses">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {lessons
                      .filter((item) =>
                        item.title
                          .toLowerCase()
                          .includes(findItem.toLowerCase())
                      )
                      .map((product, idx) => {
                        return (
                          <>
                            <div className="hidden">
                              {" "}
                              <CardPage key={Math.random()} data={product} />
                            </div>
                            <CourseItem
                              key={Math.random()}
                              data={product}
                              index={idx}
                            />
                          </>
                        );
                      })}
                  </>
                }
              />
              <Route
                path="progress"
                element={
                  <>
                    {prgressLessons.map((product, idx) => {
                      return (
                        <>
                          <div className="hidden">
                            {" "}
                            <CardPage key={Math.random()} data={product} />
                          </div>
                          <CourseItem
                            key={Math.random()}
                            data={product}
                            index={idx}
                          />
                        </>
                      );
                    })}
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
