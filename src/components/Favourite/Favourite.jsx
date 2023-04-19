import axios from "axios";
import React, { useEffect, useState } from "react";
import Categ from "../../page-elements/Categories/Categ";
import FavCard from "../Favourite-item-card/FavCard";
import "./Favourite.css";

const Favourite = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const FAV_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/like`;
  const categories = ["Lecture", "Workshop"];
  // "A-Z"
  const deleteFavCard = async (id) => {
    filtered.filter((item, idx) => idx != id);
    await axios.delete(`${FAV_URL}/${id}`);
    getData()
  };
  const getData = async () => {
    const responce = await axios.get(FAV_URL);
    setData(responce.data);
    setFiltered(responce.data);
  };
  const filterByType = (arr, type) => {
    const newArr = arr.filter((item) => {
      return item.type === type;
    });
    setFiltered(newArr);
  };
  const alphabetFilter = () => {
    const alphabetArr = data.sort();
    setFiltered(alphabetArr);
  };
  // onClick={() => filterByType(data, "Workshop")}
 

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="favourite-section">
      <div className="container">
        <div className="favourite-content">
          <div className="searchBar-block">
            <input type="text" className="favourite-input" />
          </div>
          <div className="categories-block">
            {categories.map((item, idx) => {
              return (
                <Categ
                  key={idx}
                  filtType={filterByType}
                  data={data}
                  title={item}
                />
              );
            })}
            <Categ filtType={alphabetFilter} title={"A-Z"} />
          </div>
          <div className="favourite-block">
            {filtered.map((item, idx) => {
              return (
                <FavCard
                  onDeleteHandler={deleteFavCard}
                  key={idx}
                  img={item.avatar}
                  data={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favourite;
