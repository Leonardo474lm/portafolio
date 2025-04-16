"use client";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from "@mui/joy";

interface registro {
  email: string;
  mensaje: string;
}
import React from "react";
interface State extends SnackbarOrigin {
  open: boolean;
}
export default function Contacto() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Card variant="outlined">
      <Typography level="h2" className="text-center">
        Solicitud de Contacto
      </Typography>
      <FormControl>
        <FormLabel>Email:</FormLabel>
        <Input placeholder="email" />
        <FormHelperText>Correo para validacion</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Mensaje:</FormLabel>
        <Input placeholder="message" />
        <FormHelperText>Mensaje opcional</FormHelperText>
      </FormControl>

      <Button
        variant="plain"
        onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
      >
        Bottom Left
      </Button>

      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          Successfull: Enviado Correctamente!
        </Snackbar>
      </Box>
    </Card>
  );
}
