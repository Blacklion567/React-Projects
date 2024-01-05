import { useState } from "react";
import './App.css';

const DragDrop = () => {
  const [tasks, setTasks] = useState([
    {
      name: 'Blacklion567/BSIT',
      category: "wip",
      bgcolor: 'lightblue'
    }, {
      name: 'Proline/BSED',
      category: "complete",
      bgcolor: 'blue'
    }, {
      name: 'Jamaica/BEED',
      category: "complete",
      bgcolor: '#ee9090'
    }, {
      name: 'CYCY/BSIT',
      category: "wip",
      bgcolor: '#eeed99'
    }, {
      name: 'JUDY/BSIT',
      category: "wip",
      bgcolor: '#ff3a19'
    }
  ]);


  //this event is for the dragged task card.
  //this is required to save unique id in the dom event so that when we drop it we would know the card id
  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  //fetches the card id and based on that update the status/category of that card in tasks state
  const onDrop = (event, cat) => {
    let id = event.dataTransfer.getData("id");
    let newTasks = tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    setTasks([...newTasks]);
  };

  //method to filter tasks beased on their status
  const getTask = () => {
    const tasksToRender = {
      wip: [],
      complete: [],
    };

    tasks.forEach((t) => {
      tasksToRender[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          className="task-card"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return tasksToRender;
  };

  return (
    <div className="drag-drop-container">
      <h2 className="drag-drop-header">Student Name On Task</h2>
      <div className="drag-drop-board">
        <div
          className="wip"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            onDrop(e, "wip");
          }}
        >
          <div className="task-header">In-PROGRESS</div>
          {getTask().wip}
        </div>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => onDrop(e, "complete")}
        >
          <div className="task-header">COMPLETED</div>
          {getTask().complete}
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
