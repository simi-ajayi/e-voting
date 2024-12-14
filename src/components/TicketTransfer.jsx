import React, { useState, useEffect } from "react";
import { db } from "../firebase"; 
import { doc, getDoc } from "firebase/firestore";
import MainPlaceholder from '../assets/unnamed.jpg'; 
import { FaChevronLeft } from "react-icons/fa";
import { FaBarcode, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TicketTransfer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ticket, setTicket] = useState({
    title: "",
    section: "",
    number: "",
    row: "",
    seat: "",
    logoUrl: "",
    gate: "",
    teamone: "",
    teamtwo: "",
    location: "",
    time: "",
  });

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  const documentId = "Xm6CeZ3qggvsG5ouqqMM"; 

  const fetchTicketData = async () => {
    const docRef = doc(db, "tickets", documentId); 
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTicket(docSnap.data());
    } else {
      console.error("No such document!");
    }
  };

  useEffect(() => {
    fetchTicketData();
  }, []);

  return (
    <div className="bg-gray-100 h-screen overflow-hidden flex-row justify-center items-center relative">
      <div>
        {/* Header */}
        <div className="flex items-center bg-stone-900 h-[50px] justify-between">
          <button className="text-white text-xl ml-3" onClick={closeModal}>
            <FaXmark />
          </button>
          <h2 className="text-lg text-white">My Tickets</h2>
          <button className="text-white text-sm font-medium mr-3">Help</button>
        </div>

        <div className="mx-3">
          <div className="bg-blue-500 h-[140px] flex-row rounded-t-[10px] mt-2">
            <div className="justify-center text-white rounded-t-[10px] mx-auto bg-blue-700 p-3 text-lg">
              <div className="flex justify-center">
                {ticket.title || "Standard Ticket"}
              </div>
            </div>

            {/* Main Ticket */}
            <div className="text-xl m-auto justify-center text-white gap-20 flex">
              <div className="flex gap-20 mt-4">
                <div className="flex-row">
                  Sec <div>{ticket.section || "C113"}</div>
                </div>
                <div className="flex-row align-middle">
                  <div>Row</div> <div>{ticket.row || "10"}</div>
                </div>
                <div className="flex-row">
                  Seat <div>{ticket.seat || "3"}</div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Main Logo */}
          <div className="relative w-full h-[230px]">
            <img
                src={ticket.logoUrl || MainPlaceholder}
                alt="Main Logo"
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black border-none bg-opacity-10 text-white text-center py-2">
                <div className="text-xl font-medium">{ticket.teamone || "Denver Broncos"} vs. {ticket.teamtwo || "Atlanta Falcons"}</div>
                <div className="text-sm">{ticket.time || "Sun, Nov 17, 2:05pm"} &#8226; {ticket.location || "Empower Field at Mile High"}</div>
            </div>
          </div>

          <div className="bg-white text-black shadow-md rounded-b-[10px] h-[170px]">
          <div className="text-base m-auto justify-center text-black gap-20 flex">
              <div className="flex-col space-y-3 mt-7">
                <div className="flex font-light">
                  <div className="mx-auto">Recommended: <span className="">{ticket.gate || "Gate 7"}</span></div>
                </div>
                <div className="flex bg-blue-600 w-[360px] text-white">
                  <div className="justify-center px-3 py-2 mx-auto"> View Ticket</div> 
                </div>
                <div className="flex justify-center">
                 Ticket Details
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      
      <div className="mt-5">
      <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
      </div>

      {/* Trigger Button */}
        <div className="flex mt-4">
        <div className="flex gap-8 mx-auto">
    <button
        className="bg-blue-500 text-white text-sm px-4 w-[150px] py-2 rounded font-medium hover:bg-blue-600"
        onClick={openModal}
      >
        Transfer
      </button>
      <button
        className="bg-blue-500 text-white text-sm w-[150px] px-4 py-2 rounded font-medium hover:bg-blue-600"
        onClick={openModal}
      >
    <Link to='/admin'>Sell</Link>
      </button>
    </div>
        </div>

      {/* Sliding Modal */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeModal}
      />
      <div
        className={`fixed inset-x-0 bottom-0 z-50 h-[50vh] max-h-[80vh] transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h2 className="text-lg mx-auto font-semibold">TRANSFER TICKETS</h2>
          </div>

          {/* Ticket Details */}
          <div className="p-2">
            <p className="text-sm text-gray-700 font-medium">
            {ticket.number || "2"} Tickets Selected
            </p>
            <div className="text-sm text-[#6C6F70] gap-8 flex">
              <div className="flex-row">
                Sec <div>{ticket.section || "C113"}</div>
              </div>
              <div className="flex-row align-middle">
                <div>Row</div> <div>{ticket.row || "10"}</div>
              </div>
              <div className="flex-row">
                Seat <div>{ticket.seat || "3 - 4"}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-2">
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border border-black px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border border-black px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600" htmlFor="email">
                  Email or Mobile Number
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-black px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Email or Mobile Number"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600" htmlFor="note">
                  Note
                </label>
                <textarea
                  id="note"
                  className="w-full border border-black px-3 py-2 text-sm h-[60px] focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Note"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between bg-[#f7f6f6] px-4 py-3 border-t">
            <button
              className="text-blue-500 flex items-center gap-3 text-lg font-medium"
              onClick={closeModal}
            >
              <FaChevronLeft /> BACK
            </button>
            <button className="bg-blue-500 text-white text-sm px-4 py-4 rounded-lg hover:bg-blue-600">
              Transfer  {ticket.number || "2"} Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketTransfer;
