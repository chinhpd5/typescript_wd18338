import PersonType from "../interfaces/PersonType";

function ShowInfo(props: PersonType): JSX.Element {
  return (
    <div>
      <h1 className="heading">{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.gt ? "Nam" : "Nữ"}</p>
    </div>
  );
}

export default ShowInfo;