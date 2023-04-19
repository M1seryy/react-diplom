import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PageCard from "../../page-elements/ButtonPagesCard/PageCard";
import Links from "../Links/Links";
import "./CardPage.css";

const CardPage = ({}) => {
  const dispatch = useDispatch();
  const data = useSelector((item) => item.auth.data);
  const POST_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/products`;
  const [currentData, setCurrentData] = useState(data);
  const [newClass, setNewClass] = useState("");
  const classWord = "cardWrap".split("");
  const { id } = useParams();

  // const courseNavigation = ["Usefull Links", "YouTube"];

  const filterById = () => {
    setCurrentData(
      currentData.filter((item, idx) => {
        return idx == id;
      })
    );
  };
  const setProgressHandler = () => {
    let copy = { ...currentData[0] };
    data.map((item) => {
      Object.keys(item).forEach((key) => {
        item["inProgress"] = true;
      });
    });
    dispatch({ type: "add_lessons", payload: data });

    // Object.keys(copy).forEach((key) => {
    //   copy["inProgress"] = true;
    // });

    // setCurrentData((prev) => ({ ...prev, ...copy }));
    // await axios.post(POST_URL, ...currentData);
  };
  setProgressHandler();
  const returnWord = () => {
    if (id) {
      setNewClass(classWord.join(""));
      filterById();
    }
  };
  useEffect(() => {}, []);
  useEffect(() => {
    returnWord();
  }, [id]);
  // {currentData[0].title}
  return (
    <div className={newClass}>
      <div className="container">
        <div className="cardPage-categories">
          <PageCard title={"UseFull Links"} />
          <PageCard title={"YouTube"} youtube={currentData[0].youtube} />
        </div>
        <div className="page-main-content">
          <Routes>
            <Route
              path={`links`}
              element={<Links links={currentData[0].links} />}
            />
            <Route
              path={`/`}
              element={
                <>
                  <div className="title-wrap">
                    <h1 className="text">{currentData[0].title}</h1>
                    <button className="button-69">Get this course</button>
                  </div>
                  <h2 className="text">Type:{currentData[0].type}</h2>
                  <ul className="takeAways">
                    {currentData[0].takeaways ? (
                      <h2 className="text">TakeAways:</h2>
                    ) : null}
                    {currentData[0].takeaways
                      ? currentData[0].takeaways.map((item, idx) => {
                          return (
                            <>
                              <li
                                key={idx}
                                className="takeAway-link"
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></li>
                            </>
                          );
                        })
                      : null}
                  </ul>
                  <ul className="takeAways">
                    {currentData[0].keyPoints ? (
                      <h2 className="text">KeyPoints:</h2>
                    ) : null}

                    {currentData[0].keyPoints
                      ? currentData[0].keyPoints.map((item, idx) => {
                          return (
                            <>
                              <li
                                key={idx}
                                className="takeAway-link"
                                dangerouslySetInnerHTML={{ __html: item }}
                              ></li>
                            </>
                          );
                        })
                      : null}
                  </ul>

                  <ul className="takeAways">
                    {currentData[0].hometask ? (
                      <h2 className="text">HomeTask:</h2>
                    ) : null}

                    {currentData[0].hometask
                      ? currentData[0].hometask.map((item, idx) => {
                          return (
                            <li
                              key={idx}
                              className="takeAway-link"
                              dangerouslySetInnerHTML={{ __html: item }}
                            ></li>
                          );
                        })
                      : null}
                  </ul>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
