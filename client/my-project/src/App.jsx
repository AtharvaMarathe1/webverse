import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Hostel Management System</h1>
      </header>

      <main>
        <div className="button-section">
          <h2>Leave Request</h2>
          <button className="button">
            Request Leave
          </button>
        </div>

        <div className="button-section">
          <h2>Complaint Request</h2>
          <button className="button">Submit Complaint</button>
        </div>

        <div className="button-section">
          <h2>Mess Change Request</h2>
          <button className="button">Request Mess Change</button>
        </div>

        <div className="button-section">
          <h2>Room Allocation</h2>
          <button className="button">Allocate Room</button>
        </div>

        <div className="button-section">
          <h2>Event Add</h2>
          <button className="button">Add Event</button>
        </div>

        <h2>Courses</h2>
        <p>List of courses:</p>
        <ul>
          <li>Course 1</li>
          <li>Course 2</li>
          <li>Course 1billion</li>
          {/* Add more courses as needed */}
        </ul>
        <br />
        <a href="b1.html" target="_self" title="ref1">
          Hyperlink ref
        </a>
      </main>

      <footer>
        <p>© 2023 Hostel Management System. All rights reserved.</p>
      </footer>
    </div>

    
);
}
// function rl() {
//   <a href="b1.html" target="_self" title="ref1">
//     hiii
//     </a>
// }


export default App;

