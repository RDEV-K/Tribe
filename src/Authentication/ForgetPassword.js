// import '../App.css';
// import { TextField, Button, Typography, Container } from '@mui/material';
// import { Formik, Form, Field } from 'formik';
// import { Checkbox, FormControlLabel, Link } from '@mui/material';

// function App() {
//   return (
//     <div className="AppBackground">
//       <img src="/images/Ellipse1.svg" alt="Your Image" className="YourImage" />
//       <img src={'/images/Ellipse2.svg'} alt="Your Second Image" className="YourSecondImage" />
//       <div className="YourText">No Worries</div>
//       <div className="CustomContainer">
//         <div className="LoginText">Login
//           <div className="WelcomeText">Glad you're back.!
//             <Formik
//               initialValues={{ username: '', password: '', rememberMe: false }}
//               onSubmit={(values) => {
//                 console.log(values);
//               }}
//             >
//               <Form>
//                 <Field
//                   as={TextField}
//                   name="username"
//                   label="Username"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   InputLabelProps={{
//                     style: { color: "#FFFFFF" }
//                   }}
//                   InputProps={{
//                     style: {
//                       color: "#FFFFFF",
//                       border: "1px solid #FFFFFF"
//                     }
//                   }}
//                   style={{
//                     width: 400,
//                     height: 55,
//                     color: "#FFFFFF",
//                   }}
//                 />
//                 <Field
//                   as={TextField}
//                   type="password"
//                   name="password"
//                   label="Password"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   InputLabelProps={{
//                     style: { color: "#FFFFFF" }
//                   }}
//                   InputProps={{
//                     style: {
//                       color: "#FFFFFF",
//                       border: "1px solid #FFFFFF"
//                     }
//                   }}
//                   style={{
//                     width: 400,
//                     height: 55,
//                     color: "#FFFFFF",
//                   }}
//                 />
//                 <FormControlLabel
//                   control={<Field as={Checkbox} name="rememberMe" style={{ color: "#FFFFFF" }} />}
//                   label="Remember Me"
//                   style={{ color: "#FFFFFF" }}
//                 />
//                 <Button type="submit" variant="contained" color="primary" style={{
//                   width: "400px",
//                   height: "55px",
//                   padding: "14px 10px",
//                   borderRadius: "8.45px",
//                   gap: "10px",
//                   background: "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   textTransform: "uppercase",
//                   fontWeight: "bold"
//                 }}> Submit
//                 </Button>
//               </Form>
//             </Formik>
//             <Link
//               href="#"
//               style={{
//                 width: "140px",
//                 height: "22px",
//                 fontFamily: "Noto Sans",
//                 fontSize: "16px",
//                 fontWeight: "500",
//                 lineHeight: "22px",
//                 letterSpacing: "0em",
//                 textAlign: "left",
//                 color: "#FFFFFF",
//                 textDecoration: "none",
//                 //color: "#000000",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//               }}
//             >
//               Forgot password?
//             </Link>
//             <div style={{
//               fontFamily: "Noto Sans",
//               fontSize: "16px",
//               fontWeight: "500",
//               lineHeight: "22px",
//               letterSpacing: "0em",
//               textAlign: "left",
//               //background: "#FFFFFF",
//               marginTop: "20px",
//               padding: "10px"
//             }}>
//               Don't have an account? Signup
//             </div>
//           </div>

//         </div>

//       </div>
//       <div className="AppBackground">
//       <img src="/images/Ellipse1.svg" alt="Your Image" className="YourImage" />
//       <img src={'/images/Ellipse2.svg'} alt="Your Second Image" className="YourSecondImage" />
//       <div className="YourText">Welcome Back</div>
//       <div className="CustomContainer">
//         <div className="LoginText">Login
//           <div className="WelcomeText">Glad you're back.!
//             <Formik
//               initialValues={{ username: '', password: '', rememberMe: false }}
//               onSubmit={(values) => {
//                 console.log(values);
//               }}
//             >
//               <Form>
//                 <Field
//                   as={TextField}
//                   name="username"
//                   label="Username"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   InputLabelProps={{
//                     style: { color: "#FFFFFF" }
//                   }}
//                   InputProps={{
//                     style: {
//                       color: "#FFFFFF",
//                       border: "1px solid #FFFFFF"
//                     }
//                   }}
//                   style={{
//                     width: 400,
//                     height: 55,
//                     color: "#FFFFFF",
//                   }}
//                 />
//                 <Field
//                   as={TextField}
//                   type="password"
//                   name="password"
//                   label="Password"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   InputLabelProps={{
//                     style: { color: "#FFFFFF" }
//                   }}
//                   InputProps={{
//                     style: {
//                       color: "#FFFFFF",
//                       border: "1px solid #FFFFFF"
//                     }
//                   }}
//                   style={{
//                     width: 400,
//                     height: 55,
//                     color: "#FFFFFF",
//                   }}
//                 />
//                 <FormControlLabel
//                   control={<Field as={Checkbox} name="rememberMe" style={{ color: "#FFFFFF" }} />}
//                   label="Remember Me"
//                   style={{ color: "#FFFFFF" }}
//                 />
//                 <Button type="submit" variant="contained" color="primary" style={{
//                   width: "400px",
//                   height: "55px",
//                   padding: "14px 10px",
//                   borderRadius: "8.45px",
//                   gap: "10px",
//                   background: "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   textTransform: "uppercase",
//                   fontWeight: "bold"
//                 }}> Submit
//                 </Button>
//               </Form>
//             </Formik>
//             <Link
//               href="#"
//               style={{
//                 width: "140px",
//                 height: "22px",
//                 fontFamily: "Noto Sans",
//                 fontSize: "16px",
//                 fontWeight: "500",
//                 lineHeight: "22px",
//                 letterSpacing: "0em",
//                 textAlign: "left",
//                 color: "#FFFFFF",
//                 textDecoration: "none",
//                 //color: "#000000",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//               }}
//             >
//               Forgot password?
//             </Link>
//             <div style={{
//               fontFamily: "Noto Sans",
//               fontSize: "16px",
//               fontWeight: "500",
//               lineHeight: "22px",
//               letterSpacing: "0em",
//               textAlign: "left",
//               //background: "#FFFFFF",
//               marginTop: "20px",
//               padding: "10px"
//             }}>
//               Don't have an account? Signup
//             </div>
//           </div>

//         </div>

//       </div>

//     </div>
//   );
//     </div>
//   );
// }

// export default App;
