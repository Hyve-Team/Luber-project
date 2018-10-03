import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <nav>
      <div class="nav-wrapper white">
        <Link to="/" class="brand-logo center black-text">
          LMU Bookings
        </Link>
      </div>
    </nav>
  );
};
