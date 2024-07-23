import "./index.css";
import logo from "./Image/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdBalance } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import  BarChart  from "../Barchart";


function Homepage() {
   return (
    <div className="container">
      <div className="searchlogo">
        <div className="image">
          <img src={logo} alt="Logo" />
          <h2>GanzaPay</h2>
        </div>
        <div id="searchlogo">
        <form action="/search" method="get">
    <input type="search" id="search-input" placeholder="Search..."/>
    <button type="submit">Search</button>
</form>
        </div>
      </div>
      <div className="whole">
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

        <div className="data">
          <div className="statistis">
            <div className="chart-container">
              <BarChart/>
            </div>
          </div>

          <div id="transactionlist">
            <h1>Transactions</h1>
            <div className="transactionlist">
              <div className="list">
                <h2>Reciever</h2>
                <h2>Type</h2>
                <h2>Date</h2>
                <h2>Amount Paid</h2>
              </div>

              <div className="carts">
                <div className="fshop">
                  <p>
                    <FaCartShopping />
                  </p>
                  <p>
                    <FaCartShopping />
                  </p>
                  <p>
                    <FaCartShopping />
                  </p>
                  <p>
                    <FaCartShopping />
                  </p>
                  <p>
                    <FaCartShopping />
                  </p>
                </div>

                <div className="sshop">
                  <p>Tigoni Factory</p>
                  <p>Tigoni Factory</p>
                  <p>Tigoni Factory</p>
                  <p>Tigoni Factory</p>
                  <p>Tigoni Factory</p>
                </div>

                <div className="tshop">
                  <p>Shopping</p>
                  <p>Shopping</p>
                  <p>Shopping</p>
                  <p>Shopping</p>
                  <p>Shopping</p>
                </div>

                <div className="eshop">
                  <p>16th January 2024</p>
                  <p>17th January 2024</p>
                  <p>18th January 2024</p>
                  <p>19th January 2024</p>
                  <p>20th January 2024</p>
                </div>
                <div className="nshop">
                  <p>1400</p>
                  <p>2000</p>
                  <p>4000</p>
                  <p>1200</p>
                  <p>1200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topclient">
          <h1>Top Clients</h1>
          <div className="users">
            <div className="firstname">
              <FaUser />
              <p>Daniel Rutha</p>
            </div>
            <div className="secondname">
              <FaUser />
              <p>Gloria Nyaga</p>
            </div>
            <div className="thirdname">
              <FaUser />
              <p>Faith Wamui</p>
            </div>
            <div className="fourthname">
              <FaUser />
              <p>Nancy Shimwe</p>
            </div>
            <div className="fifthname">
              <FaUser />
              <p>Hannah Onyolo</p>
            </div>
            <div className="sixthname">
              <FaUser />
              <p>Cynthia Maina</p>
            </div>
          </div>

          <div className="balance">
            <p>
              <MdBalance />
            </p>
            <h2>Total Balance</h2>
            <h3>RWF 200,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
