import { useState, ChangeEvent } from "react";

import { Box, Button, TextField } from "@mui/material"
import SaveOutlineIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'

export const NewEntry = () => {

  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const OnSave = () => {

    if (inputValue.length === 0) return;

  }

  return (
    <Box sx={{ marginBottom: 2, marginX: 2 }}>
      {
        isAdding ? (
          <>
            <TextField
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1 }}
              placeholder='Nueva entrada'
              autoFocus
              multiline
              label='Nueva entrada'
              helperText={inputValue.length <= 0 && touched && 'Ingrese una nueva tarea'}
              error={inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={onTextFieldChanges}
              onBlur={() => setTouched(true)}
            />
            <Box display='flex' justifyContent='space-between'>
              <Button
                variant='text'
                onClick={() => setIsAdding(false)}
              >
                Cancelar
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                endIcon={<SaveOutlineIcon />}
                onClick={OnSave}
              >
                Guardar
              </Button>
            </Box>
          </>
        )
          : (
            <Button
              startIcon={<AddIcon />}
              fullWidth
              variant='outlined'
              onClick={() => setIsAdding(true)}
            >
              Agregar Tarea
            </Button>
          )
      }
    </Box>
  )
}