import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';

interface AddTodoProps {
    handleAddTodo: (todo: string) => void
}


const AddTodo = (props: AddTodoProps) => {

    const { handleAddTodo } = props;

    const [todo, setTodo] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };

    const handleAdd = () => {
        if (!todo || !todo.trim().length) {
            return false;
        }
        handleAddTodo(todo.trim());
        setTodo('');
    };


    return (
        <Grid container style={{ alignItems: 'center' }}>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <TextField
                    label={"Todo Label"}
                    value={todo}
                    onChange={handleChange}
                    id={'todo-add-input'}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleAdd}
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    );
};

export default AddTodo;