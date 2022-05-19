import "./styles.css";
import Card from "./components/Card";
function App() {
  const data = [
    {
      date: "12-14-2022",
      Work: "Case Study",
      logo: "A",
      Heading: "Amazon Gift",
      SubHeading: "Pay",
      Device: "Desktop-Mobile",
      color: "yellow"
    },
    {
      date: "14-14-2022",
      Work: "Case Study",
      logo: "A",
      Heading: "Amazon Gift",
      SubHeading: "Pay",
      Device: "Desktop-Mobile",
      color: "whitesmoke"
    }
  ];
  console.log(data);
  return (
    <div className="App">
      <div>
        {data.map((user) => (
          <Card data={user}></Card>
        ))}
      </div>
    </div>
  );
}
export default App;
