import React, { useEffect, useState } from "react";
import LineChart from "../components/Chart/Line";
import DoughnutChart from "../components/Chart/Doughnut";
import PieChart from "../components/Chart/pie";
import BarChart from "../components/Chart/Bar";
import Table from "../components/Table";

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://visualization--dashboard.herokuapp.com/api/v1/data/stats`)
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h4>
        <strong>Dashboard</strong>
      </h4>
      <hr />
      <div className="col-12 border home-chart-a overflow-scroll p-2 bg-light rounded-1 w-100">
        <div className="" style={{ minWidth: "600px" }}>
          <LineChart data={data.country} title="Country Chart" />
        </div>
      </div>
      <div className="row g-0 justify-content-between">
        <div className="col-lg-8 col-md-9 col-12 border home-chart-a overflow-scroll p-2 mt-3 bg-light rounded-1">
          <div className="" style={{ minWidth: "400px" }}>
            <BarChart data={data.region} title="Region Chart" />
          </div>
        </div>
        <div className="d-flex align-items-center col-lg-4 col-md-3 col-12 border home-chart-b mt-3 bg-light rounded-1">
          <div className="pie mx-auto">
            <DoughnutChart data={data.relevance} title="Relevance Chart" />
          </div>
        </div>
      </div>
      <div className="row g-0 justify-content-between flex-column-reverse flex-md-row">
        <div className="d-flex align-items-center col-lg-4 col-md-3 col-12 border home-chart-b mt-3 bg-light rounded-1">
          <div className="pie mx-auto">
            <PieChart data={data.likelihood} title="Likelihood Chart" />
          </div>
        </div>
        <div className="col-lg-8 col-md-9 col-12 border home-chart-a overflow-scroll p-2 mt-3 bg-light rounded-1">
          <div className="" style={{ minWidth: "400px" }}>
            <BarChart data={data.end_year} title="End year chart" />
          </div>
        </div>
      </div>
      <div className="row g-0 justify-content-between">
        <div className="col-lg-8 col-md-9 col-12 border home-chart-a overflow-scroll p-2 mt-3 bg-light rounded-1">
          <div className="" style={{ minWidth: "400px" }}>
            <BarChart data={data.intensity} title="Intensity Chart" />
          </div>
        </div>
        <div className="d-flex align-items-center col-lg-4 col-md-3 col-12 border home-chart-b mt-3 bg-light rounded-1">
          <div className="pie mx-auto">
            <DoughnutChart data={data.relevance} title="Relevance Chart" />
          </div>
        </div>
      </div>

      <Table stats={data} />
    </div>
  );
};

export default Home;