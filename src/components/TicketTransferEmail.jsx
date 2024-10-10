import React from 'react';
import Logo from '../assets/01109bff281a56a092c510b01cf687926cc992b5.png';
import Received from '../assets/download.png';
import Receivedd from '../assets/download (1).png';
import Main from '../assets/images.jpeg';
import FB from '../assets/facebook.png';
import IG from '../assets/instagram.png';
import X from '../assets/x.png';
import YT from '../assets/youtube.png';

const TicketTransferEmail = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', margin: 0, padding: 0 }}>
      <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" style={{ margin: 0, padding: 0 }}>
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: 0, backgroundColor: '#ffffff' }}>
              {/* Header Section */}
              <tr>
                <td align="center" bgcolor="#0046bf" style={{ padding: '20px', color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}>
                  <img src={Logo} alt="Ticketmaster Logo" style={{ display: 'block', margin: '0 auto' }} />
                </td>
              </tr>

              {/* Main Content Section */}
              <tr>
                <td style={{ padding: '20px', color: '#4B5158', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                  Your Ticket Transfer From Barry Is Ready To Be Accepted!
                </td>
              </tr>

              {/* Steps Section */}
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{ padding: '0 20px', marginTop: '20px' }}>
                    <tr>
                      <td align="center" style={{ paddingBottom:'30px'}}>
                        <table width="80%" cellpadding="0" cellspacing="0" border="0" style={{ margin: '0 auto' }}>
                          <tr>
                            {/* Step 1: Received */}
                            <td align="center" style={{ textAlign: 'center' }}>
                              <table width="40" height="40" bgcolor="#0046bf" style={{ borderRadius: '50%', display: 'inline-block', border: '2px dashed transparent' }}>
                                <tr align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <td align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                                    <img src={Received} alt="Received" style={{ width: '20px', height: '20px' }} />
                                  </td>
                                </tr>
                              </table>
                              <p style={{ marginTop: '10px', fontSize: '14px', color: '#0046bf' }}>Received</p>
                            </td>

                            {/* Step 2: Accepted */}
                            <td align="center" style={{ textAlign: 'center' }}>
                              <table width="40" height="40" bgcolor="#ffffff" style={{ borderRadius: '50%', display: 'inline-block', border: '2px dashed #cccccc' }}>
                                <tr align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <td align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                                    <img src={Receivedd} alt="Accepted" style={{ width: '20px', height: '20px', opacity: '0.5' }} />
                                  </td>
                                </tr>
                              </table>
                              <p style={{ marginTop: '10px', fontSize: '14px', color: '#cccccc' }}>Accepted</p>
                            </td>

                            {/* Step 3: Complete */}
                            <td align="center" style={{ textAlign: 'center' }}>
                              <table width="40" height="40" bgcolor="#ffffff" style={{ borderRadius: '50%', display: 'inline-block', border: '2px dashed #cccccc' }}>
                                <tr align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <td align="center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>

                                    <img src={Received} alt="Complete" style={{ width: '20px', height: '20px', opacity: '0.5' }} />
                                  </td>
                                </tr>
                              </table>
                              <p style={{ marginTop: '10px', fontSize: '14px', color: '#cccccc' }}>Complete</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Ticket Details Section */}
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style={{ border: '1px solid #e0e0e0', padding: '20px', textAlign: 'left', fontSize: '16px', backgroundColor: '#F8F8F8' }}>
                    <tr>
                    <td style={{ padding: '20px', margin: '0 20px' }}>
                        <h3 style={{ fontSize: '18px', margin: '10px 0', color: '#4B5158', fontWeight: 'bold' }}>New Orleans Saints vs. Carolina Panthers</h3>
                        <p style={{ fontSize: '14px', marginBottom: '0px', color: '#6C6F70' }}>Sun, Sep 8 @ 12:00 PM</p>
                        <p style={{ fontSize: '14px', marginBottom: '20px', color: '#6C6F70' }}>Caesars Superdome, New Orleans, LA</p>
                        <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#4B5158' }}>Section 623, Row 2, Seat 1</p>
                        <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#4B5158' }}>Section 623, Row 2, Seat 2</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Image Section */}
              <tr>
                <td>
                  <img src={Main} alt="Saints Logo" style={{ width: '100%', maxWidth: '600px', display: 'block' }} />
                </td>
              </tr>

              {/* Accept Button */}
              <tr>
                <td align="center" style={{ padding: '30px 0' }}>
                  <a href="#" style={{ backgroundColor: '#0046bf', color: '#ffffff', width:'340px', padding: '12px 24px', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', borderRadius: '5px', display: 'inline-block' }}>Accept Tickets</a>
                </td>
              </tr>

              {/* Disclaimer */}
              <tr>
                <td style={{ padding: '0px 20px', paddingBottom:'50px', fontSize: '16px', color: '#6C6F70', textAlign: 'left' }}>
                  <p style={{ marginTop: '30px' }}>By clicking "ACCEPT TICKETS", you agree to our <span href="#">Terms of Use</span> and any applicable ticket back terms.</p>
                  <p><strong>Ticket Tip: Only accept ticket transfers from people you know and trust.</strong></p>
                  <p>This helps everyone to stay both safe and socially distanced while also improving ticket security. Please note that due to evolving COVID-19 protocols, the venue may change seating configurations and we can't guarantee social distancing at the event.</p>
                  <p>If the tickets were obtained fraudulently by the person transferring them, they may be canceled at any time, removed from your account, and no longer available for use.</p>
                  <p>This email is <strong>NOT</strong> your ticket. You can see the ticket in your Ticketmaster account.</p>
                </td>
              </tr>

              {/* Footer Section */}
              <tr style={{paddingTop:'40px'}}>
                <td align="center" bgcolor="#0046bf" style={{ padding: '40px 0', color: '#ffffff', fontSize: '14px' }}>
                  <p>Stay Connected</p>
                  <table cellpadding="8" cellspacing="2" border="0" style={{ margin: '20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <tr>
                      <td><a href="#"> <img src={FB} alt="Facebook" style={{ width: '24px' }} /></a></td>
                      <td><a href="#"> <img src={IG} alt="Instagram" style={{ width: '24px' }} /></a></td>
                      <td><a href="#"><img src={X} alt="Twitter" style={{ width: '24px' }} /></a></td>
                      <td><a href="#"><img src={YT} alt="YouTube" style={{ width: '24px' }} /></a></td>
                    </tr>
                  </table>
                  

                  <p style={{ margin: '20px 0' }}>
                    <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Ticketmaster</a> |
                    <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}> About</a> |
                    <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}> Terms of Use</a> |
                    <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}> Privacy Policy</a>
                  </p>
                  <div style={{ margin: '10px 0', color: '#cccccc' }}>
    355 Sainte-Catherine West Street, Suite 601, Montreal, Quebec, H3B 1A5
  </div>

                  <p>&copy; 2024 Ticketmaster. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TicketTransferEmail;
