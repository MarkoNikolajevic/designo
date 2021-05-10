const LocationAddress = (props: {
  nation: string;
  office: string;
  street: string;
  city: string;
  phone: string;
  mail: string;
}) => {
  return (
    <div>
      <h1>{props.nation}</h1>
      <div>
        <p>
          <strong>{props.office}</strong>
        </p>
        <p>{props.street}</p>
        <p>{props.city}</p>
      </div>
      <div>
        <p>P: {props.phone}</p>
        <p>M: {props.mail}</p>
      </div>
    </div>
  );
};

export default LocationAddress;
