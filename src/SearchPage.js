import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png"
        channel="Youtube Channel"
        verified
        subs="700K"
        noOfVideos={432}
        description="You can find awesome youtube hacks here!You can find awesome youtube hacks here!You can find awesome youtube hacks here!"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do You want a FREE online resource for programming........."
        timestamp="50 seconds ago"
        channel="Youtube Channel"
        title="Let's build fucking youtube videos"
        image="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2018/12/The-21-Best-Video-Editing-Apps-for-Android-iPhone-and-iPad.png"
      />

      <VideoRow
        views="2M"
        subs="659k"
        description="Do You want a FREE online resource for programming........."
        timestamp="4 days ago"
        channel="Youtube Channel"
        title="Let's build fucking project of youtube"
        image="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg"
      />

      <VideoRow
        views="600k"
        subs="659k"
        description="Do You want a FREE online resource for programming........."
        timestamp="2 days ago"
        channel="Youtube Channel"
        title="Let's make project with React JS"
        image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/108383635/original/626f1fda69305efcb5076c8af2be5393c53ecda4/develop-and-fix-reactjs-web-application.png"
      />
    </div>
  );
}

export default SearchPage;
