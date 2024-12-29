import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem, Select } from "@mui/material";
import { v4 as uuidv4 } from "uuid";


function Add({ setTasksList, tasksList, setCategory ,category ,title , description}) {
  // const inputRef1 = useRef(null);
  // const inputRef2 = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = useState({ isDone: false });
  const [catv1, setCatv1] = useState("");
  // console.log(newTask);
  // const [category, setCategory] = useState("");
  const handlecategorychange = (e) => {
    setCatv1(e.target.value);
    // setCategory(e.target.value);
    // console.log(category);
  };
  const handlefinalcat = () => {
 setCategory(catv1);
  }

  //  const [selectedCategory, setSelectedCategory] = useState(""); // Make sure initial value is empty string or valid value

  //  const handleChange = (e) => {
  //    setSelectedCategory(e.target.value); // Update state with selected value
  //      console.log(selectedCategory);
  //  };

  const handleAdd = () => {if (!newTask.title) {
       alert("Please select a title!");
       return; // Stop the function if category is empty
  }
    if (!newTask.description) {
       alert("Please select a description!");
       return; // Stop the function if category is empty
    }
    
    if (!category) {
       alert("Please select a category!");
       return; // Stop the function if category is empty
    }
   
    // setNewTask({
    //   ...newTask,
    //   task1: inputRef1.current.value.trim(),
    //  task2: inputRef1.current.value.trim(), id: uuidv4(),
    // });

    // setTasksList([...tasksList, newTask]);
    // if (!e.target.value){return alert("")}
    setTasksList([...tasksList, { ...newTask, id: uuidv4() }]);
    setCatv1("");
    setCategory("");
    

    //  const taskWithId = { ...newTask, id: uuidv4() };
    //  setTasksList([...tasksList, taskWithId]);
  };
  // console.log(newTask);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            backgroundImage: 'url("/images/anime-boy-lofi.jpg")', // Add background image
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white", // Ensure text is visible against the background
            backdropFilter: "blur(8px)", // Apply blur
            height: "250px",
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: "30px",
            width: "500px",
            border: "1px solid #0F547D",
          },
          style: {
            backgroundColor: "#8C2732",
            color: "white",
          },
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle
          sx={{
            color: "#0F547D", // Text color
            borderColor: "white", // Outline color
            fontWeight: "700",
            backdropFilter: "blur(8px)", // Apply blur
            height: "20px",
          }}
        >
          Add Your Task
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            // inputref={inputRef1}
            autoFocus
            required
            margin="dense"
            id="name"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "&:focus": {
                backdropFilter: "blur(8px)", // Apply blur
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                border: "2px solid white",
              },
              transition: "backdrop-filter 0.4s ease",

              width: "400px",

              "& .MuiInputBase-root": {
                color: "white",
              },
              "& .MuiInputBase-root.Mui-focused": {
                color: "white",
                backdropFilter: "blur(6px)", // Apply blur
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                borderTop: "white 1px solid",
                borderLeft: "white 1px solid",
                borderRight: "white 1px solid",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              input: {
                color: "white",
              },
              label: {
                color: "white",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "#0F547D",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#0F547D", // Change the color here for hover
                borderBottomWidth: "2px", // Default border thickness
              },
            }}
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value, id: uuidv4() });
            }}
          />{" "}
          <TextField
            // inputref={inputRef2}
            autoFocus
            required
            margin="dense"
            id="name"
            name="desc"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            sx={{
              "&:focus": {
                backdropFilter: "blur(8px)", // Apply blur
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                border: "2px solid white",
              },
              // "&:hover": {
              //   backdropFilter: "blur(8px)", // Apply blur
              //   borderTopRightRadius: "20px",
              //   borderTopLeftRadius: "20px",
              //   border: "white",
              // },
              transition: "backdrop-filter 0.4s ease",

              width: "400px",

              "& .MuiInputBase-root": {
                color: "white",
              },
              "& .MuiInputBase-root.Mui-focused": {
                color: "white",
                backdropFilter: "blur(6px)", // Apply blur
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                borderTop: "white 1px solid",
                borderLeft: "white 1px solid",
                borderRight: "white 1px solid",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
              input: {
                color: "white",
              },
              label: {
                color: "white",
              },
              "& .MuiInput-underline:before": {
                borderBottomColor: "#0F547D",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white",
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#0F547D", // Change the color here for hover
                borderBottomWidth: "2px", // Default border thickness
              },
            }}
            onChange={(e) => {
              setNewTask({
                ...newTask,
                description: e.target.value,
                id: uuidv4(),
              });
            }}
          />
          <Select
            // value={selectedCategory} // Bind the value to the state
            // onChange={handleChange} // Update the state on change
            // displayEmpty
            value={catv1}
            onChange={handlecategorychange}
            displayEmpty
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              width: 30, // Custom width
              height: 40, // Custom height
              fontSize: "1rem", // Font size
              border: "1px solid #0F547D", // Border width and style
              margin: "11px",
              // "&:hover": {
              //   borderColor: "green",
              // },
              // "&.Mui-focused": {
              //   borderColor: "red",
              // },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#612A30",
                  color: "white", // Change background color of the dropdown menu
                },
              },
            }}
          >
            <MenuItem value="intelligence">Intelligence</MenuItem>
            <MenuItem value="strength">Strength</MenuItem>
            <MenuItem value="creativity">Creativity</MenuItem>
            <MenuItem value="charisma">Charisma</MenuItem>

          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleAdd} onClickCapture={handlefinalcat} >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Add;
