import "./styles.css";
import TreeView from "./Tree";

const nodes = [
  {
    id: "1",
    label: "Parent",
    pid: "0",
    children: [
      {
        id: 2,
        label: "Child1",
        pid: 1,
        children: [
          {
            id: 3,
            label: "inner-child1",
            pid: 2
          }
        ]
      },
      {
        id: 4,
        label: "Child2",
        pid: 1,
        children: [
          {
            id: 5,
            label: "inner-child2",
            pid: 4
          }
        ]
      }
    ]
  }
];
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TreeView nodes={nodes} />
    </div>
  );
}
