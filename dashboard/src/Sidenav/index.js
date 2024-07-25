import "./index.css"
import { IoHomeOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function Sidenav(){
    return(
        <div className="sections">
        <div className="home">
          <IoHomeOutline />
          <p>Home</p>
        </div>
        <div className="transaction">
          <CiDollar />
          <p>Transaction</p>
        </div>
        <div className="statistics">
          <FcStatistics />
          <p>Statistics</p>
        </div>
        <div className="care">
          <RiCustomerService2Line />
          <p>Customer Care</p>
        </div>
        <div className="setting">
          <IoSettingsOutline />
          <p>Settings</p>
        </div>
        <div className="log">
          <IoIosLogOut />
          <p>Log Out</p>
        </div>
      </div>

    );
};


export default Sidenav;