import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Gallery } from "./components/gallery";
import { Navigation } from "./components/navigation";
import { Profile } from "./components/profile";
import { ThemeSwitcher } from "./theme";
import { useParams } from "react-router-dom";
import axios from "axios";


const ThemeWrap = styled.div`
  background: var(--ins-background-primary);
`;
const Main = styled.main`
  padding: 30px 20px 0px 20px;
  max-width: 935px;
  margin: 0 auto;
  @media only screen and (max-width: 735px) {
    padding: 0;
  }
`;

export function ProfilePage() {
  const [theme, setTheme] = useState("light");
  const {id} = useParams()
  const [data,setData] = useState(null)

  async function fetchUser(nameInsta){
       await axios
      .post("http://localhost:3100/api/getuser", {
        name: nameInsta,
      })
      .then((res) => {        
          setData(res.data.user[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  useEffect(() => {
    const nameInsta = id[0].toLocaleUpperCase() + id.slice(1).toLocaleLowerCase()
    fetchUser(nameInsta)
  },[])

  if(data){
    return (
      <ThemeWrap className={`__insta-${theme}-mode`}>
        <Navigation />
        <Main>
          <Profile data={data} />
          <Gallery data={data} />
        </Main>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </ThemeWrap>
    );
  }
  else{
    return <h1>No User </h1>
  }
}
