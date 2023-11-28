import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Box,
  FormControl,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import axios from "axios";
import { IP } from "../../constant";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Login({ setToken }) {
  const [formData, setFormData] = useState({
    email: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login successful");
    try {
      const response = await axios.post(`${IP}/auth/login`, {
        email: formData.email,
        password: formData.confirmPassword,
      });
      console.log("Login successful", response.data);
      toast.success("Login Successfull");
      setToken(response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed", error.data);
      toast.error("Login Failed");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1 className="form-title">Login</h1>
      <FormControl onSubmit={handleSubmit}>
        <div className="form">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "80%",
              maxWidth: "400px",
              margin: "auto",
            }}
          >
            <Grid item xs={12}>
              <label
                className="form-label"
                htmlFor="email"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Email
              </label>
              <TextField
                type="email"
                id="mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@example.com"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "45px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <label
                className="form-label"
                htmlFor="password"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Password
              </label>
              <TextField
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.showPassword}
                onChange={handleChange}
                placeholder="Enter your password"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "10px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "45px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ color: "#fff" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                className="submit"
                style={{
                  borderRadius: "10px",
                  background: "none",
                  padding: "8px 20px",
                  fontSize: "17px",
                  color: "#6236C0",
                  border: "2px solid #6236C0",
                  width: "60%",
                  fontFamily: "Nunito",
                  marginTop: "16px",
                }}
                onClick={handleSubmit}
              >
                Register
              </Button>
              <Typography
                variant="subtitle1"
                className="text"
                style={{
                  color: "#fff",
                  marginTop: "16px",
                }}
              >
                Don't have an account?{" "}
                <a href="/register" className="link-style">
                  Click Here to Register
                </a>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </FormControl>
    </Box>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
