import React from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const sendEmail = () => {
	console.log("egg")
}

const ContactForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" id="formWrapper">
		<div className="formContainer">
			<Grid item xs={12}>
				<TextField id="outlined-basic" label="Name" variant="outlined" />
				<TextField id="outlined-basic" label="Email" variant="outlined" />
				<TextField id="outlined-basic" label="Phone" variant="outlined" />
			</Grid>
			<Grid>
				<p id="messageLabel">Enter your message below</p>
				<TextareaAutosize id="outlined-basic" className="message" label="Message" variant="outlined" rowsMin={6} />
			</Grid>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				endIcon={<FontAwesomeIcon icon={faPaperPlane}/>}
				onClick={sendEmail}
				>
				Send
      		</Button>
      	</div>
    </form>
  );
}

export default ContactForm;