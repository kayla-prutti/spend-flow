import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Transactions from "../transactions/transactions";
import Expenses from "../expenses/expenses";
import Report from "../report/report";
import "./menu-bar.css";

function MenuBar() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <nav>
          <Link to="/" className="link">
            Dashboard
          </Link>
          <Link to="/transactions" className="link">
            Transactions
          </Link>
          <Link to="/expenses" className="link">
            Expenses
          </Link>
          <Link to="/report" className="link">
            Report
          </Link>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default MenuBar;
