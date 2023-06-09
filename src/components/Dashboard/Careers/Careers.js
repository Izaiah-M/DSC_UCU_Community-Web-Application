import { useEffect, useState } from "react";
import apiRequests from "../../../utils/Config";
import { CareersCard } from "./CareersCard";

export const Careers = () => {
  const [jobs, setJobs] = useState([]);

  const googleJobs = async () => {
    const results = await apiRequests.getJobs();

    // console.log(results);
    setJobs(results);
  };

  useEffect(() => {
    googleJobs();
  }, []);

  return (
    <div>
      <p style={{ fontWeight: "bolder" }}>Google Careers!</p>
      <CareersCard jobs={jobs} />
    </div>
  );
};
