import office from "../office.jpg";

function OfficeSpace() {

  const officeList = [
    {
      name: "Skyline Workspace",
      rent: 55000,
      address: "Bangalore"
    },
    {
      name: "Tech Park Office",
      rent: 72000,
      address: "Hyderabad"
    },
    {
      name: "Business Hub",
      rent: 48000,
      address: "Pune"
    }
  ];

  return (
    <div>

      <h1>Office Space Rental Application</h1>

      <img
        src={office}
        alt="Office"
        width="500"
      />

      <br /><br />

      {officeList.map((office, index) => (

        <div key={index}>

          <h2>{office.name}</h2>

          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            Rent: ₹{office.rent}
          </h3>

          <h3>Address: {office.address}</h3>

          <hr />

        </div>

      ))}

    </div>
  );

}

export default OfficeSpace;