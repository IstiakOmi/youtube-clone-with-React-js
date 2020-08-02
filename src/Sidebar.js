import React from "react";
import "./Sidebar.css";
import SideberRow from "./SideberRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <SideberRow selected Icon={HomeIcon} title="Home" />
      <SideberRow Icon={WhatshotIcon} title="Trending" />
      <SideberRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SideberRow Icon={VideoLibraryIcon} title="Library" />
      <SideberRow Icon={HistoryIcon} title="History" />
      <SideberRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SideberRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideberRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SideberRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
