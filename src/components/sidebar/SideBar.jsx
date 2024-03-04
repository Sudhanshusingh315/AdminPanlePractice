import "./style.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineTimeline } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { MdOutlineProductionQuantityLimits, MdReport } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { LuFileStack } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { BsSuitcaseLg } from "react-icons/bs";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sideBarWapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItems">
              <FaHome className="sideBaricons" />
              Home
            </li>

            <li className="sideBarListItems">
              <MdOutlineTimeline className="sideBaricons" />
              Analytics
            </li>
            <li className="sideBarListItems">
              <IoMdTrendingUp className="sideBaricons" />
              Sales
            </li>
          </ul>
        </div>
      </div>
      <div className="sideBarWapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItems">
              <HiUsers className="sideBaricons" />
              Users
            </li>

            <li className="sideBarListItems">
              <MdOutlineProductionQuantityLimits className="sideBaricons" />
              Products
            </li>
            <li className="sideBarListItems">
              <FaDollarSign className="sideBaricons" />
              Transaction
            </li>
            <li className="sideBarListItems">
              <GiNetworkBars className="sideBaricons" />
              Reports
            </li>
          </ul>
        </div>
      </div>
      <div className="sideBarWapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notification</h3>
          <ul className="sideBarList">
            <li className="sideBarListItems">
              <CiMail className="sideBaricons" />
              Mail
            </li>

            <li className="sideBarListItems">
              <LuFileStack className="sideBaricons" />
              Feedback
            </li>
            <li className="sideBarListItems">
              <LuMessageSquare className="sideBaricons" />
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className="sideBarWapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItems">
              <BsSuitcaseLg className="sideBaricons" />
              Manage
            </li>

            <li className="sideBarListItems">
              <MdOutlineTimeline className="sideBaricons" />
              Analytics
            </li>
            <li className="sideBarListItems">
              <MdReport className="sideBaricons" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
