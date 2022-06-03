export default function Die(props) {
  return (
    <div className={props.isHeld ? "die--face hold" : "die--face"}>
      <h2 className="die--num">{props.value}</h2>
    </div>
  );
}