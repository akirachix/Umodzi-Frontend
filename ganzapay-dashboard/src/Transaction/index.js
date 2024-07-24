import  "./index.css"
import { IoHomeOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Transaction= ()=>{
    return(
        <>
        <div>
          <img src="images/logo-removebg-preview.png"  />
        </div>

        <h1>Transaction</h1>
        <div className="table">

        <div className="title">
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





           
         {/* <div className="title">
            <h3>Dashboard</h3>
            <h3>Transaction</h3>
            <h3>Statistics</h3>
            <h3>Customer Care</h3>
            <h3>Settings</h3>
            <h3>Log Out</h3>
         </div> */}

         <div className="details">

           <div className="heading">
           <p>Reciever</p>
           <p>Type</p>
           <p>Date</p>
            <p>AmountPaid</p>
           </div>

           <div className="text">
           <div>
            <p>TigoniFactrory</p>
            <p>TigoniFactrory</p>
            <p>TigoniFactrory</p>
            <p>TigoniFactrory</p>
            <p>TigoniFactrory</p>
           </div>

           <div>
            <p>Shopping</p>
            <p>Shopping</p>
            <p>Shopping</p>
            <p>Shopping</p>
            <p>Shopping</p>
           </div>

           <div>
            <p>13thJan2024</p>
            <p>13thJan2024</p>
            <p>13thJan2024</p>
            <p>13thJan2024</p>
            <p>13thJan2024</p>
           </div>

           <div>
            <p>1200</p>
            <p>1200</p>
            <p>1200</p>
            <p>1200</p>
            <p>1200</p>
           </div>

         </div>

         </div>

        </div>
        </>
        
    )
}
 export default Transaction;