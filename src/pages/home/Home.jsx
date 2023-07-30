import React, { useState } from "react";
import { HomeContainer, HomeImg, MainContainer } from "./Home.style";
import homeImg from "../../assets/books.jpg";
import Header from "../../components/header/Header";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = () => {
  // const printType = ["all","books","magazines"]
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);
  // const APP_KEY = process.env.React_APP_apiKEY
  const APP_KEY = "AIzaSyAL68VtSAma-4MfiLRiIeCqQ7FVeX1XP_Q";

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setMyData(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContainer>
      <Header
        setQuery={setQuery}
        setSelectType={setSelectType}
        getData={getData}
      />
      {!myData.length ? (
        <HomeImg>
          <img src={homeImg} alt="homeImg" />
        </HomeImg>
      ) : (
        <MainContainer wrap="wrap">
          {
            myData.map((item)=> <Card key={item.id} item={item}/>)
          }
        </MainContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
