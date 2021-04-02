import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    india: {
      andhra: ["praksam", "nellore"],
      telegana: ["hyderabad", "manikonda"],
      kerala: ["kochi", "tiruvunathapuram"]
    },

    us: {
      mexico: ["united states", "mexicon district"],
      albert: ["albert distrcit"]
    }
  });

  const [country, setcountry] = useState("");

  const [state, setstate] = useState([]);
  const [district, setdistrict] = useState([]);

  const Changecountry = (event) => {
    if (event.target.value === "none") {
      setstate([]);
      setdistrict([]);
    } else {
      const country_selected = event.target.value;

      setcountry(event.target.value);

      const state_for_country = Object.keys(data[country_selected]);
      setstate(state_for_country);
      const all_districts = [];

      for (let i = 0; i < state_for_country.length; i++) {
        let districts = [];
        districts = data[country_selected][state_for_country[i]];
        for (let j = 0; j < districts.length; j++) {
          all_districts.push(districts[j]);
        }
      }
      setdistrict(all_districts);
    }
  };

  const changestate = (event) => {
    setdistrict(data[country][event.target.value]);
  };

  const states_dropdown = state.map((state, index) => {
    return (
      <option key={index} value={state}>
        {state}
      </option>
    );
  });

  const district_dropdown = district.map((district, index) => {
    return (
      <option key={index} value={district}>
        {district}
      </option>
    );
  });

  return (
    <div>
      <h2 id="heading">Select the Dropdown button:</h2>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="country">
          <b>Select country:</b>
          <select
            className="dropdown"
            defaultValue={"none"}
            onChange={(event) => {
              Changecountry(event);
            }}
          >
            <option value="none" selected="selected">
              Select the Country{" "}
            </option>
            <option value="india">India</option>
            <option value="us">US</option>
          </select>
        </div>

        <div className="state">
          <b>Select State:</b>
          <select
            className="dropdown"
            defaultValue="none"
            onChange={(event) => {
              changestate(event);
            }}
          >
            <option value="none" selected="selected">
              Select the State
            </option>
            {states_dropdown}
          </select>
        </div>
        <div className="district">
          <b>Select District:</b>
          <select className="dropdown" defaultValue="none">
            <option value="none" selected="selected">
              Select the District
            </option>
            {district_dropdown}
          </select>
        </div>
      </div>
    </div>
  );
}
export default App;
