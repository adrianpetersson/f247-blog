import React, { useState } from "react";
import styled from "styled-components";
import data from "../data/content";

const LanguagePicker = () => {
  const [menu, setMenu] = useState(false);
  const [lang, setLang] = useState("Sweden");

  // get current flag icon
  let filterdIcon = data.global.countries.filter((current) =>
    current.lang.includes(lang)
  );

 
  return (
    <MenuContainer>
      {menu ? (
        <LangMenu>
          {data.global.countries.map((lang) => (
            <LanguageDiv key={lang.lang} onClick={() => {setLang(lang.lang); setMenu(false)}}>
              {" "}
              <Flag src={lang.icon} alt={lang.lang} /> <span>{lang.lang}</span>{" "}
            </LanguageDiv>
          ))}
        </LangMenu>
      ) : null}
      <LangPicker onClick={() => setMenu(!menu)}>
        <Flag src={filterdIcon[0].icon} alt={data.global.lang.alt} />
        <span>{lang}</span>
      </LangPicker>
    </MenuContainer>
  );
};

const Flag = styled.img`
  margin-left: 0 auto;
  width: 40px;
  height:40px;
`;

const LanguageDiv = styled.div`
display:flex;
padding 0 2rem;
justify-content:space-between;
margin:1rem 0rem;
text-align:center;
&:hover {
    background-color:blue;
    color:white;
    cursor:pointer;
`;
const MenuContainer = styled.div`
  position: relative;
  z-index: 99;
`;
const LangMenu = styled.div`
  margin-bottom: 4rem;
  z-index: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: white;
`;
const LangPicker = styled.button`
width:200px;
position:relative;
display:flex;
align-items:center;
justify-content:space-between;
padding: 1rem 2rem;
&:focus {
    outline: blue;
`;

export default LanguagePicker;
