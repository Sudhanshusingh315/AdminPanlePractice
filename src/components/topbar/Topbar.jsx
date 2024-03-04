// imoprting css
import "./top.css";
// importing icons
import { FaBell } from "react-icons/fa6";
import { FaGlobeEurope } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topwrapper">
          <div className="left">
            <span className="topleft">Admin Dashborad</span>
          </div>
          <div className="topright">
            <div className="topBarIconContainer">
              <FaBell />
              <span className="iconBadge">2</span>
            </div>

            <div className="topBarIconContainer">
              <FaGlobeEurope />
              <span className="iconBadge">2</span>
            </div>

            <div className="topBarIconContainer">
              <IoSettings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
