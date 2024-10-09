import Logo from '../assets/01109bff281a56a092c510b01cf687926cc992b5.png';
import Received from '../assets/download.png'
import Receivedd from '../assets/download (1).png'
import Main from '../assets/images.jpeg'
import FB from '../assets/facebook.png'
import IG from '../assets/instagram.png'
import X from '../assets/x.png'
import YT from '../assets/youtube.png'

const TicketTransferEmail = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', margin: 0, padding: 0, textAlign: 'center' }}>
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: 0, backgroundColor: '#ffffff' }}>
        <div style={{ backgroundColor: '#0046bf', padding: '20px', color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}>
          <img src={Logo} alt="Ticketmaster Logo" />
        </div>

        <div style={{ padding: '20px', color: '#4B5158', fontSize: '20px', fontWeight: 'bold' }}>
          Your Ticket Transfer From Barry Is Ready To Be Accepted!
        </div>

        <div style={{ margin: '20px 0', padding: '0 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0', padding: '10px 0', position: 'relative' }}>
            <div style={{ content: '""', position: 'absolute', top: '30%', left: '12.5%', right: '12.5%', height: '2px', backgroundColor: '#cccccc', zIndex: 0 }}></div>

            <div style={{ flex: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <img src={Received} alt="Received" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px dashed #0046bf', padding: '10px', backgroundColor: '#0046bf' }} />
              <p style={{ marginTop: '10px', fontSize: '14px', color: '#0046bf' }}>Received</p>
            </div>

            <div style={{ flex: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <img src={Receivedd} alt="Accepted" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px dashed #cccccc', padding: '10px', backgroundColor: '#ffffff' }} />
              <p style={{ marginTop: '10px', fontSize: '14px', color: '#cccccc' }}>Accepted</p>
            </div>

            <div style={{ flex: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <img src={Received} alt="Complete" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px dashed #cccccc', padding: '10px', backgroundColor: '#ffffff' }} />
              <p style={{ marginTop: '10px', fontSize: '14px', color: '#cccccc' }}>Complete</p>
            </div>
          </div>

          <div style={{ border: '1px solid #e0e0e0', padding: '20px', textAlign: 'left', fontSize: '16px', backgroundColor: '#F8F8F8' }}>
            <h3 style={{ fontSize: '18px', margin: '10px 0', color: '#4B5158', fontWeight: 'bold' }}>New Orleans Saints vs. Carolina Panthers</h3>
            <div style={{ fontSize: '14px', marginBottom: '20px', lineHeight: 1.5, color: '#6C6F70' }}>
              <p>Sun, Sep 8 @ 12:00 PM</p>
              <p>Caesars Superdome, New Orleans, LA</p>
            </div>
            <div style={{ fontSize: '14px', marginBottom: '20px', lineHeight: 1.5, fontWeight: 'bold', color: '#4B5158' }}>
              <p>Section 623, Row 2, Seat 1</p>
              <p>Section 623, Row 2, Seat 2</p>
            </div>
          </div>

          <div>
            <img src={Main} alt="Saints Logo" style={{ width: '100%', maxWidth: '600px' }} />
          </div>

          <div style={{ marginTop: '20px', paddingBottom: '30px' }}>
            <a href="#" style={{ backgroundColor: '#0046bf', color: 'white', padding: '12px 24px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', borderRadius: '5px', marginTop: '20px', width: '80%', display: 'inline-block' }}>Accept Tickets</a>
            <div style={{ fontSize: '16px', color: '#6C6F70', textAlign: 'left' }}>
              <p style={{ marginTop: '30px' }}> By clicking "ACCEPT TICKETS", you agree to our <span href="#">Terms of Use</span> and any applicable ticket back terms.</p>

              <p><span style={{ fontSize: '16px', color: '#4B5158', fontWeight: 'bold' }}>Ticket Tip: Only accept ticket transfers from people you know and trust.</span> This helps everyone to stay both safe and socially distanced while also improving ticket security. Please note that due to evolving COVID-19 protocols, the venue may change seating configurations and we can't guarantee social distancing at the event.</p>

              <p>If the tickets were obtained fraudulently by the person transferring them, they may be canceled at any time, removed from your account and no longer available for use.</p>

              <p>This email is <strong>NOT</strong> your ticket. You can see the ticket in your Ticketmaster account.</p>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#0046bf', color: '#ffffff', padding: '40px 0', textAlign: 'center', fontSize: '14px', margin: 'auto' }}>
          <div>Stay Connected</div>
          <div style={{ marginBottom: '20px', marginTop: '20px' }}>
            <a href="#"><img src={FB} alt="Facebook" style={{ width: '24px', margin: '0 10px', verticalAlign: 'middle' }} /></a>
            <a href="#"><img src={IG} alt="Instagram" style={{ width: '24px', margin: '0 10px', verticalAlign: 'middle' }} /></a>
            <a href="#"><img src={X} alt="Cross Icon" style={{ width: '24px', margin: '0 10px', verticalAlign: 'middle' }} /></a>
            <a href="#"><img src={YT} alt="YouTube" style={{ width: '24px', margin: '0 10px', verticalAlign: 'middle' }} /></a>
          </div>

          <div style={{ margin: '20px 0' }}>
            <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Ticketmaster</a> |
            <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>About</a> |
            <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Terms of Use</a> |
            <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Privacy</a>
          </div>
          <div style={{ margin: '10px 0', color: '#cccccc' }}>
            355 Sainte-Catherine West Street, Suite 601, Montreal, Quebec, H3B 1A5
          </div>
          <div>&copy; 2024 Ticketmaster. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default TicketTransferEmail;
