import { useContext } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


import TodoContext from "../TodoContext";
import { Todo } from "./Todo";

interface TodoListProps {
    todoList?: Array<Todo>
};


const TodoList = (props: TodoListProps) => {

    //const { todoList } = props;

    const todoList = useContext(TodoContext);

    const todoListRender = todoList?.map((todo, index) => {
        return (
            <ListItem disablePadding key={todo.id}>
                <ListItemButton>
                    <ListItemText primary={todo.label} />
                </ListItemButton>
            </ListItem>
        );
    });

    return (
        <>
            {todoList?.length ?
                <Grid container style={{ marginTop: '10px' }}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}>
                        <List>
                            {todoListRender}
                        </List>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>

                : null}

        </>
    );
};

export default TodoList;