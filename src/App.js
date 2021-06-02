import './App.css';
import { Grid, Typography } from '@material-ui/core';
import Summary from './components/reminders/Summary';
import InputPanel from './components/reminders/InputPanel';
import TaskList from './components/reminders/TaskList';
import { ReminderContext } from './components/contexts/ReminderContext';
import { useState } from 'react';


function App() {

  const [state, setState] = useState({
    tasks: [
      {
        title: "Homework",
        isChecked: true,
        isFavorited: true,
      },
      {
        title: "Running",
        isChecked: false,
        isFavorited: true,
      },
      {
        title: "Swimming",
        isChecked: false,
        isFavorited: false,
      }
    ]
  })

  const addTask = (title) => {
    setState({
      ...state,
      tasks: [
        ...state.tasks,
        {
          title,
          isChecked: false,
          isFavorited: false
        }
      ]
    })
  }
  const handleChecked = (value) => () => {
    const currentIndex = state.tasks.indexOf(value);
    const newChecked = [...state.tasks,
    { ...state.tasks[currentIndex], isChecked: !value.isChecked }];
    console.log("value", newChecked)

    setState({
      ...state,
      tasks: [
        ...state.tasks,
        state.tasks[currentIndex] = {
          ...state.tasks[currentIndex],
          isChecked: !value.isChecked
        }
      ]
    })
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Grid container justify="center" style={{ marginBottom: 16 }}>
        <Typography style={{ fontSize: 32, fontWeight: "bold" }}>Reminders</Typography>
      </Grid>

      <ReminderContext.Provider
        value={{
          tasks: state.tasks,
          addTask: addTask,
          handleChecked: handleChecked
        }}
      >
        <Grid>
          <Grid style={{ marginBottom: 8 }}>
            <InputPanel />
          </Grid>
          <Grid container justify="center" style={{ marginBottom: 8 }}>
            <TaskList />
          </Grid>
          <Grid container justify="center" style={{ marginBottom: 8 }}>
            <Summary />
          </Grid>
        </Grid>
      </ReminderContext.Provider>
    </Grid>
  );
}

export default App;
