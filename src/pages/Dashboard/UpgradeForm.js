import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle } from '@material-ui/core';
import { DialogContent } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from "@material-ui/core/Button";
import RadioInputBtn from '../../components/RadioIInputBtn'

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';





const useStyles = makeStyles((theme) => ({
    consent: {
        backgroundColor: "#D8D8D8"
    },
}));



export default function UpgradeForm(props) {
    // const [gender, setGender]=useState()
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const [wechatId, setWechaId] = useState()
    const [birthday, setBirthday] = useState()
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [yearError, setYearError] = useState("");
    const [university, setUniversity] = useState("UNITEC")
    const [faculty, setFaculty] = useState({
        Arts: false,
        BussinessSchool: false,
        Science: false,
        NICAI: false,
        Engineering: false,
        Law: false,
        Medicine: false,
        Architecture: false,
        CollegeOfFoundation: false
    })

    const handleBirthdayChange = (date) => {
        console.log(date)
        setBirthday(date);
    };

    const handleFaulty=(event)=>{
        setFaculty({...faculty,[event.target.name]:event.target.checked})
    }

    const yearCheck = (e) => {
        const newValue = e.target.value;

        if (newValue < 1) {
            setYearError("Year cannot be <1")
        } else {
            setYearError("")
        }
    }

    const handleUniversity = (e) => {
        setUniversity(e.target.value);
    }

    const {Arts,BussinessSchool,Science,NICAI,Engineering,Law,Medicine,Architecture,CollegeOfFoundation,Others}=faculty
    const classes = useStyles();

    return (
        <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" maxWidth={maxWidth} fullWidth={true}>
            <DialogTitle>Registration Form</DialogTitle>
            <DialogContent>
                <form >
                    <Grid container spacing={4}>
                        <Grid item md={12}>
                            <Grid container justify={"space-evenly"} spacing={4}>
                                <Grid item md={4}>
                                    <TextField required autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Email Address"
                                        type="email"
                                        fullwidth="true"
                                    />
                                </Grid>
                                <Grid item md={4}>
                                    <FormControl required component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender1" row>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="Prefer not say" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <Grid container justify={"space-evenly"} spacing={4}>
                                <Grid item md={4}>
                                    <TextField
                                        margin="dense"
                                        id="name"
                                        label="Wechat ID"
                                        type="text"
                                        fullwidth="true" />
                                </Grid>
                                <Grid item md={4}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            required
                                            disableFuture={true}
                                            disableToolbar
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Birthday"
                                            value={birthday}
                                            onChange={handleBirthdayChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <Grid container justify={"space-evenly"} spacing={4}>
                                <Grid item md={4}>
                                    <TextField required
                                        margin="dense"
                                        id="name"
                                        label="Phone number"
                                        type="tel"
                                        fullwidth="true" />
                                </Grid>
                                <Grid item md={4}>
                                    <TextField
                                        margin="dense"
                                        id="id"
                                        label="Student ID"
                                        type="text"
                                        fullwidth="true" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <Grid container justify={"space-evenly"} spacing={4}>
                                <Grid item md={4}>
                                    <Grid container justify={"space-evenly"} spacing={4}>
                                        <Grid item md={12}>
                                            <FormControl required component="fieldset">
                                                <FormLabel component="legend">University</FormLabel>
                                                <RadioGroup aria-label="University" name="University" value={university} onChange={handleUniversity}>
                                                    <FormControlLabel value="UNITEC" control={<Radio />} label="UNITEC" />
                                                    <FormControlLabel value="AUT" control={<Radio />} label="AUT" />
                                                    <FormControlLabel value="MasseyUniversity" control={<Radio />} label="Massey University" />
                                                    <FormControlLabel value="UoA" control={<Radio />} label="UoA" />
                                                    <RadioInputBtn setOther={setUniversity} />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item md={12}>
                                            <TextField required label="Major/Specialisation" type="Text" />
                                        </Grid>
                                        <Grid item md={12}>
                                            <TextField
                                                required
                                                label="Year of Study"
                                                type="number"
                                                helperText={yearError}
                                                error={!!yearError}
                                                onChange={yearCheck} />

                                        </Grid>
                                    </Grid>


                                </Grid>
                                <Grid item md={4}>
                                    <FormControl required component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Faculty</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox checked={Arts} name="Arts" />}
                                                label="Arts"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox 
                                                    checked={BussinessSchool} 
                                                    name="Bussiness School" 
                                                    onChange={handleFaulty}/>}
                                                label="Bussiness School"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={Science}
                                                    name="Science" 
                                                    onChange={handleFaulty}/>}
                                                label="Science"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={NICAI}
                                                    name="NICAI" 
                                                    onChange={handleFaulty}/>}
                                                label="NICAI"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={Engineering}
                                                    name="Engineering" 
                                                    onChange={handleFaulty}/>}
                                                label="Engineering"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={Law}
                                                    name="Law" />}
                                                label="Law"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={Medicine}
                                                    name="Medicine"
                                                    onChange={handleFaulty} />}
                                                label="Medicine"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={Architecture}
                                                    name="Architecture" 
                                                    onChange={handleFaulty}/>}
                                                label="Architecture"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={CollegeOfFoundation}
                                                    name="College of Foundation" 
                                                    onChange={handleFaulty}/>}
                                                label="College of Foundation"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={Others}
                                                    name="Others" 
                                                    onChange={handleFaulty}/>}
                                                label={<TextField label="Others" />}
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <Grid container justify={"space-evenly"} spacing={4}>
                                <Grid item align={"center"} md={10} className={classes.consent}>
                                    <h2>Consent Of Membership</h2>
                                    <p>I have read and understand the regulation and constitution of NZCSA. I have had the opportunity to ask questions and have them answered to my satisfaction:<br />
                                        1. I agree to take part in this students' association.<br />
                                        2. I understand that I am free to discontinue participating at any time, and to withdraw my data any time without giving a reason, however, the membership fee will not be refunded.<br />
                                        3. I understand that all information provided to the NZCSA: <br />(1) will remain confidential, <br />(2) will only be used internally within NZCSA.<br />
                                        4. I understand that personal information will be stored for a period of three years, after which they will be securely destroyed.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <Grid container justify={"space-evenly"} spacing={4}>
                                <Grid item align={"center"} md={10}>
                                    <FormControl required component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">This form will be held for a period of 3 years.</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="understand" />}
                                                label="I understand"
                                            />
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>


                    <Grid container justify={"center"} >
                        <Button>Submit</Button>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>
        // <div>hi</div>

    );
}