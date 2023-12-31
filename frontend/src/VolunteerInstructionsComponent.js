import React from "react";

const VolunteerInstructionsComponent = () => {
  return (
    <div className="volunteer-instructions">
      <h3 className="instructions-header">How to Book a Volunteer Session</h3>
      <p className="instructions-text">
        Welcome to our city farm! We have both morning and evening sessions
        available for volunteers to help us with feeding our farm animals.
      </p>

      <div>
        <h4 className="sessions-header">Morning Sessions</h4>
        <p className="sessions-description">
          Our morning sessions start at 09:00 and end at 11:00. These sessions
          are perfect for early birds looking to assist with feeding our
          animals.
        </p>
        <div className="sessions-steps">
          To book a <span className="available-session">morning</span> session,
          follow these steps:
          <ol>
            <li>
              Click on an available{" "}
              <span className="available-session">morning</span> session on the
              calendar.
            </li>
            <li>Select your name and click the "Book" button.</li>
            <li>
              You'll receive a confirmation, and the session will be marked as
              booked by changing color to{" "}
              <span className="booked-session">morning</span>.
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h4 className="sessions-header">Evening Sessions</h4>
        <p className="sessions-description">
          Our evening sessions start at 17:00 and end at 19:00. These sessions
          are ideal for those who prefer assisting with feeding our farm animals
          in the late afternoon or evening.
        </p>
        <div className="sessions-steps">
          To book an <span className="available-session">evening</span> session,
          follow the same steps as for morning sessions.
        </div>
      </div>

      <p className="notes">
        Please note that to ensure fairness and availability for everyone, we
        only allow one volunteer per session (either morning or evening).
      </p>
    </div>
  );
};

export default VolunteerInstructionsComponent;
