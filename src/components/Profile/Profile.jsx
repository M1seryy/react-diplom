import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Await, Link, Route, Router, Routes } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const POST_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/products`;
  const data = useSelector((state) => state.auth.data);
  const [countArr, setCountArr] = useState([]);
  const [type, setType] = useState();
  const nameRef = useRef();
  const titleRef = useRef();
  const youTubeRef = useRef();
  const homeTaks = useRef();
  // const countOfLinks = useRef();
  const linkName = useRef();
  const link = useRef();
  let arr = [];
  const createArr = () => {
    for (let i = 1; i <= 1; i++) {
      arr.push(i);
    }
    setCountArr(arr);
  };
  const returnCount = () => {
    return countArr.map((item) => {
      return (
        <div className="link-content">
          <div class="mb-4">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title of link
            </label>
            <input
              ref={linkName}
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name of link
            </label>
            <input
              ref={link}
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      );
    });
  };
  let baseObj = {
    inProgress: false,
    complete: false,
  };
  const formHandler = async (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    let title = titleRef.current.value;
    let youTube = youTubeRef.current.value;
    // let type = typeRef.current.value;
    let linkUrl = link.current.value;
    let linkTitle = linkName.current.value;
    let homeTaskValue = homeTaks.current.value;

    let hometask = homeTaskValue.split(",");
    let links = [[linkTitle, linkUrl]];
    let postData = {
      ...baseObj,
      type,
      name,
      title,
      youTube,
      type,
      links,
      hometask,
      id: data.length + 1,
    };
    await axios.post(POST_URL, postData);
  };
  const changeHandler = (event) => {
    setType(event.target.value);
  };
  useEffect(() => {
    returnCount();
  }, [arr]);
  return (
    <section className="profile-wrap">
      <div className="container">
        <div className="profile-content">
          <aside className="side-bar">
            <Link to={"/profile"} className="side-bar-item link">
              My Study
            </Link>
            <Link to={"/profile/creator"} className="side-bar-item link">
              Create Course
            </Link>
          </aside>
          <div className="main-profile-content">
            <Routes>
              <Route
                path="/*"
                element={
                  <div className="bg-red-500">
                    This div has a red background color
                  </div>
                }
              />
              <Route
                path="creator"
                element={
                  <form onSubmit={formHandler} className="creator-form">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Type
                    </label>
                    <select
                      onChange={changeHandler}
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="Lecture">Lecture</option>
                      <option value="Workshop">Workshop</option>
                    </select>
                    {type === "Workshop" ? (
                      <div class="mb-4">
                        <label
                          for="default-input"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          HomeTask
                        </label>
                        <input
                          ref={homeTaks}
                          type="text"
                          id="default-input"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    ) : null}
                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        ref={nameRef}
                        type="text"
                        id="default-input"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        ref={titleRef}
                        type="text"
                        id="default-input"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        YouTube
                      </label>
                      <input
                        ref={youTubeRef}
                        type="text"
                        id="default-input"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>

                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        UseFull Links
                      </label>
                    </div>
                    <button onClick={createArr}>Create a Link</button>
                    <div className="scroll-content">{returnCount()}</div>
                    <input type="submit" />
                  </form>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
