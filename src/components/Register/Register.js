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
  Select,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import axios from "axios";
import { IP } from "../../constant";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Register({ setToken }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    email: "",
    graduationYear: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${IP}/auth/register`, {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      });
      console.log("Registration successful", response.data);
      toast.success("Registration Successful");
      setToken(response.data.token);
      navigate("/home");
      // Handle success response and store the token if needed
    } catch (error) {
      console.error("Registration failed", error);
      toast.error("Registration Failed");
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
      <h1 className="form-title">Register Now</h1>
      <FormControl onSubmit={handleSubmit}>
        <div id="form_id" className="form">
          <Grid container spacing={8} justifyContent="space-between">
            <Grid item xs={12} sm={6} style={{ order: 1 }}>
              <label
                className="form-label"
                htmlFor="firstName"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                First Name
              </label>
              <TextField
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    marginBottom: "16px",
                    width: "350.18px",
                    marginLeft: "10px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                htmlFor="college"
                className="form-label"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                College
              </label>
              <TextField
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="University of South California"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                className="form-label"
                htmlFor="graduationYear"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                Graduation Year
              </label>

              <Select
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                className="outlined-input"
                style={{
                  borderRadius: "20px",
                  boxSizing: "border-box",
                  color: "#fff",
                  backgroundColor: "#0D0D0D",
                  height: "55px",
                  width: "350.18px",
                  marginLeft: "10px",
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  marginBottom: "16px",
                  borderColor: "#06F8DB",
                }}
              >
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
                <MenuItem value={2025}>2025</MenuItem>
                <MenuItem value={2026}>2026</MenuItem>
              </Select>

              <label
                className="form-label"
                htmlFor="password"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                Password
              </label>
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    marginBottom: "16px",
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
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} style={{ textAlign: "right", order: 2 }}>
              <label
                className="form-label"
                htmlFor="lastName"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                Last Name
              </label>
              <TextField
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Smith"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                className="form-label"
                htmlFor="email"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
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
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                className="form-label"
                htmlFor="contactNumber"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                Phone number
              </label>
              <TextField
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+91 1234567890"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    marginBottom: "16px",
                  },
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />

              <label
                className="form-label"
                htmlFor="confirmPassword"
                style={{
                  fontFamily: "Nunito",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "block",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                Confirm Password
              </label>
              <TextField
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your password"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: "20px",
                    padding: "12px",
                    boxSizing: "border-box",
                    color: "#fff",
                    backgroundColor: "#0D0D0D",
                    height: "55px",
                    width: "350.18px",
                    marginLeft: "10px",
                    fontFamily: "Nunito",
                    fontSize: "14px",
                    marginBottom: "16px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        style={{ color: "#fff" }}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  classes: {
                    notchedOutline: "outlined-input",
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ order: 3 }}>
            <Button
              type="submit"
              variant="contained"
              className="submit"
              style={{
                borderRadius: "15px",
                background: "none",
                padding: "10px",
                fontSize: "20px",
                color: "#6236C0",
                border: "2px solid #6236C0",
                width: "300px",
                fontFamily: "'Orbitron', sans-serif",
                marginBottom: "16px",
                marginTop: "20px",
                onClick: { handleSubmit },
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
              Already registered?{" "}
              <a href={"/login"} className="link-style">
                Login here
              </a>
            </Typography>
          </Grid>
        </div>
      </FormControl>
    </Box>
  );
}

Register.propTypes = {
  setToken: PropTypes.func.isRequired,
};
