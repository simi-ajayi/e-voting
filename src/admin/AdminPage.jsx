import { useState, useEffect } from "react";
import { db, storage } from "../firebase"; 
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AdminPage = () => {
  const [ticket, setTicket] = useState({
    title: "",
    section: "",
    number: "",
    row: "",
    seat: "",
    gate: "",
    logoUrl: "",
    teamone: "",
    teamtwo: "",
    location: "",
    time: "",
  });
  const [newLogo, setNewLogo] = useState(null);

  const documentId = "Xm6CeZ3qggvsG5ouqqMM"; 

  const fetchTicketData = async () => {
    try {
      console.log("Fetching ticket data...");
      const docRef = doc(db, "tickets", documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Ticket data fetched:", docSnap.data());
        setTicket(docSnap.data());
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error fetching ticket data:", error);
    }
  };

  useEffect(() => {
    fetchTicketData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed - ${name}: ${value}`);
    setTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    console.log("File selected:", e.target.files[0]);
    setNewLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting updated ticket data...");
      console.log("Current ticket state before update:", ticket);

      let logoUrl = ticket.logoUrl;

      if (newLogo) {
        console.log("Uploading new logo...");
        const logoRef = ref(storage, `logos/${newLogo.name}`);
        await uploadBytes(logoRef, newLogo);
        logoUrl = await getDownloadURL(logoRef);
        console.log("New logo uploaded. URL:", logoUrl);
      }

      const docRef = doc(db, "tickets", documentId);
      console.log("Updating Firestore document...");
      await updateDoc(docRef, { ...ticket, logoUrl });

      console.log("Document updated successfully!");
      alert("Ticket updated successfully!");
      fetchTicketData(); // Refresh data after updating
    } catch (error) {
      console.error("Error updating ticket:", error);
      alert("Failed to update the ticket. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Update Ticket</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium" htmlFor="title">
            Ticket Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={ticket.title}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Enter Ticket Title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="section">
            Section
          </label>
          <input
            type="text"
            id="section"
            name="section"
            value={ticket.section}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Enter Section"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="section">
           Gate
          </label>
          <input
            type="text"
            id="gate"
            name="gate"
            value={ticket.gate}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Gate 7"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="row">
            Row
          </label>
          <input
            type="text"
            id="row"
            name="row"
            value={ticket.row}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Enter Row"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="seat">
            Seat
          </label>
          <input
            type="text"
            id="seat"
            name="seat"
            value={ticket.seat}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Enter Seat"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="seat">
            Number of Tickets
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={ticket.number}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="No of Tickets"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="seat">
            Team one
          </label>
          <input
            type="text"
            id="teamone"
            name="teamone"
            value={ticket.teamone}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Team one"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="seat">
            Team two
          </label>
          <input
            type="text"
            id="teamtwo"
            name="teamtwo"
            value={ticket.teamtwo}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Team two"
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="seat">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={ticket.location}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Empower Field at Mile High"
          />
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="seat">
            Time
          </label>
          <input
            type="text"
            id="time"
            name="time"
            value={ticket.time}
            onChange={handleInputChange}
            className="w-full border px-3 py-2"
            placeholder="Sun, Nov 17, 2:05pm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="logo">
            Ticket Logo
          </label>
          <input
            type="file"
            id="logo"
            onChange={handleFileChange}
            className="w-full border px-3 py-2"
          />
        </div>
        {ticket.logoUrl && (
          <div>
            <p className="text-sm">Current Logo:</p>
            <img src={ticket.logoUrl} alt="Current Logo" className="w-32" />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Ticket
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
