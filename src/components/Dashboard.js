import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Navigation from './Navigation';

const Dashboard = ({userInfo}) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTask) {
      await updateTask(editingTask._id, task);
      setEditingTask(null);
    } else {
      await createTask(task);
    }
    setTask({ title: '', description: '' });
    const { data } = await fetchTasks();
    setTasks(data);
  };

  const handleEdit = (task) => {
    setTask(task);
    setEditingTask(task);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <Navigation userInfo={userInfo}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <Button variant="contained" color="primary" type="submit">
          {editingTask ? 'Update Task' : 'Add Task'}
        </Button>
      </form>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task._id}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => handleEdit(task)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDelete(task._id)}>
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))}
      </List>
    </Navigation>
  );
};

export default Dashboard;
