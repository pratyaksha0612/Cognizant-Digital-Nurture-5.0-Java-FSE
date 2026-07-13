import CohortDetails from "./Components/CohortDetails";

const cohorts = [
  {
    code: "INTADMDF10 - .NET FSD",
    startedOn: "22-Feb-2022",
    status: "Scheduled",
    coach: "Ashwin",
    trainer: "Jojo Jose",
  },
  {
    code: "ADM21JF014 - Java FSD",
    startedOn: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith",
  },
  {
    code: "CDBJF21025 - Java FSD",
    startedOn: "24-Dec-2021",
    status: "Ongoing",
    coach: "Ashima",
    trainer: "John Doe",
  },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cohorts Details</h1>

      {cohorts.map((cohort, index) => (
        <CohortDetails
          key={index}
          cohort={cohort}
        />
      ))}
    </div>
  );
}

export default App;