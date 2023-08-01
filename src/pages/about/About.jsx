import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/about.jpg";
import { iconData } from "../../helper/iconData";
import Icon from '../../components/icon/Icon';
const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="Mike" />
      <InfoContainer>
        <h2>Hi,  I'm Mike </h2>
        <h3>I'm currently learning Full-Stack Development languages</h3>
        <h4>I've known JS, ReactJS , NextJs , Reactnative, NodeJs, AWS services </h4>
        <h4>You can ask me any questions you want </h4>
      </InfoContainer>
      <IconContainer>
        {
          iconData.map(item => <a key={item.icon} href={item.href}>
            <Icon icon={item.icon} path={item.path} hoverColor={item.color}/> 
            </a>)
        }
      </IconContainer>
    </AboutContainer>
  );
};

export default About;
