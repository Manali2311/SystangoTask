import React from 'react';
import './Team.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import HeightTwoToneIcon from '@material-ui/icons/HeightTwoTone';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import FormHelperText from '@material-ui/core/FormHelperText';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Team extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            lastname: "",
            height: "",
            position: [],
            arr: [{ arrname: "", arrlastname: "", arrheight: "", arrposition: [] }],

            nameerror: false,
            namehelper: "",

            lastnameerror: false,
            lastnamehelper: "",

            heighterror: false,
            heighthelper: "",

            positionerror: false,
            positionhelper: "",
        }
    }

    componentDidMount() {

        if (localStorage.getItem("Data")) {
            let Data = localStorage.getItem("Data");
            Data = JSON.parse(Data);

            if (this.state.arr[0].arrname === "") {
                this.state.arr.pop();
            }

            Data.map(data => (
                this.state.arr.push({ arrname: data.arrname, arrlastname: data.arrlastname, arrheight: data.arrheight, arrposition: data.arrposition })
            ))

            this.setState({
                arr: this.state.arr
            })

        }
    }

    valid = () => {

        if (this.state.name === "" && this.state.lastname === "" && this.state.height === "" && !this.state.position.length) {
            this.setState({
                nameerror: true,
                namehelper: "*First name is required",

                lastnameerror: true,
                lastnamehelper: "*Last name is required",

                heighterror: true,
                heighthelper: "*Height is required",

                positionerror: true,
                positionhelper: "*Position is required",
            })

            return false;
        }

        else if (this.state.name === "") {
            this.setState({
                nameerror: true,
                namehelper: "*First name is required"
            })
            return false;
        }

        else if (this.state.lastname === "") {
            this.setState({
                lastnameerror: true,
                lastnamehelper: "*Last name is required"
            })
            return false;
        }

        else if (this.state.height === "") {
            this.setState({
                heighterror: true,
                heighthelper: "*Height is required"
            })
            return false;
        }

        else if (!this.state.position.length) {
            this.setState({
                positionerror: true,
                positionhelper: "*Position is required"
            })
            return false;
        }

        else {
            return true;
        }

    }

    nameValidation = () => {
        if (this.state.name === "") {

            this.setState({
                nameerror: true,
                namehelper: "*Enter valid first name"
            })

            return false;
        }

        else if (this.state.name.length < 3) {
            this.setState({
                nameerror: true,
                namehelper: "*First name must be greater than 3 character"
            })
            return false;
        }

        else if (!this.state.name.match("^[a-zA-Z]+$")) {
            this.setState({
                nameerror: true,
                namehelper: "*First Name must be a string value"
            })
            return false;
        }

        else {
            this.setState({
                nameerror: false,
                namehelper: ""
            })
            return true;
        }
    }

    lastnamevalidation = () => {

        if (this.state.lastname === "") {
            this.setState({
                lastnameerror: true,
                lastnamehelper: "*Enter valid first name",
            })
            return false;
        }

        else if (this.state.lastname.length < 3) {
            this.setState({
                lastnameerror: true,
                lastnamehelper: "*Last Name must be greater than 3 character",
            })
            return false;
        }

        else if (!this.state.lastname.match("^[a-zA-Z]+$")) {
            this.setState({
                lastnameerror: true,
                lastnamehelper: "*Last Name must be a string value",
            })
            return false;
        }

        else {
            this.setState({
                lastnameerror: false,
                lastnamehelper: "",
            })
            return true;
        }
    }

    heightvalidation = () => {

        if (this.state.height === "") {
            this.setState({
                heighterror: true,
                heighthelper: "*Height is required",
            })
            return false;
        }

        else if (this.state.height < 1) {
            this.setState({
                heighterror: true,
                heighthelper: "*Height must be a positive number",
            })
            return false;
        }

        else if (this.state.height.match("[a-zA-Z]+$")) {
            this.setState({
                heighterror: true,
                heighthelper: "*Height must be a positive number",
            })
            return false;
        }

        else {
            this.setState({
                heighterror: false,
                heighthelper: "",
            })
            return true;
        }
    }

    positionvalidation = () => {
        if (!this.state.position.length) {
            this.setState({
                positionerror: true,
                positionhelper: "*Select your positions",
            })
            return false;
        }
        else {
            this.setState({
                positionerror: false,
                positionhelper: "",
            })
            return true;
        }
    }

    Changename = (event) => {
        this.setState({
            name: event.target.value
        }, () => {
            this.nameValidation()
        })
    };

    Changelastname = (event) => {
        this.setState({
            lastname: event.target.value
        }, () => {
            this.lastnamevalidation()
        })
    };

    heightchange = (e) => {
        this.setState({
            height: e.target.value
        }, () => {
            this.heightvalidation()
        })
    }

    handleChange = (event) => {
        this.setState({
            position: event.target.value
        }, () => {
            this.positionvalidation()
        })
    };

    submit = (e) => {
        e.preventDefault();

        if (this.valid()) {

            if (this.state.arr[0].arrname === "") {
                this.state.arr.pop();
                this.state.arr.push({ arrname: this.state.name, arrlastname: this.state.lastname, arrheight: this.state.height, arrposition: this.state.position })
            }
            else {
                this.state.arr.push({ arrname: this.state.name, arrlastname: this.state.lastname, arrheight: this.state.height, arrposition: this.state.position })
            }
            this.setState({
                arr: this.state.arr,
                name: "",
                lastname: "",
                height: "",
                position: [],

                nameerror: false,
                namehelper: "",

                lastnameerror: false,
                lastnamehelper: "",

                heighterror: false,
                heighthelper: "",

                positionerror: false,
                positionhelper: "",
            })

            toast("🦄 Player Added !", {
                type: "info"
            })

            localStorage.setItem("Data", JSON.stringify(this.state.arr));
        }
    }

    render() {
        return (
            <div className="OuterDiv">
                <div className="InnerDiv">
                    <form className="FormClass">
                        <FormControl variant="outlined">
                            <TextField id="input-with-icon-textfield" label="First Name" variant="outlined" type="text" value={this.state.name} onChange={this.Changename} error={this.state.nameerror} helperText={this.state.namehelper}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PermIdentityTwoToneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                labelwidth={78}
                            />
                        </FormControl>

                        <br />

                        <FormControl variant="outlined">
                            <TextField id="input-with-icon-textfield" label="Last Name" variant="outlined" type="text" value={this.state.lastname} onChange={this.Changelastname} error={this.state.lastnameerror} helperText={this.state.lastnamehelper}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PeopleAltTwoToneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                labelwidth={78}
                            />
                        </FormControl>

                        <br />

                        <FormControl variant="outlined">
                            <TextField id="input-with-icon-textfield" label="Height" variant="outlined" type="number" value={this.state.height} onChange={this.heightchange} error={this.state.heighterror} helperText={this.state.heighthelper}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <HeightTwoToneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                labelwidth={78}
                            />
                        </FormControl>

                        <br />

                        <FormControl variant="outlined" error={this.state.positionerror}>
                            <InputLabel id="demo-simple-select-outlined-label">Position</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.position}
                                onChange={this.handleChange}
                                multiple
                                label="Position"
                            >
                                <MenuItem value={"Point Guard (PG)"}>Point Guard (PG)</MenuItem>
                                <MenuItem value={"Shooting Guard (SG)"}>Shooting Guard (SG)</MenuItem>
                                <MenuItem value={"Small Forward (SF)"}>Small Forward (SF)</MenuItem>
                                <MenuItem value={"Power Forward (PF)"}>Power Forward (PF)</MenuItem>
                                <MenuItem value={"center (C)"}>center (C)</MenuItem>
                            </Select>
                            <FormHelperText>{this.state.positionhelper}</FormHelperText>
                        </FormControl>

                        <br />

                        <ToastContainer autoClose={3000} hideProgressBar />

                        <Button
                            type="submit"
                            onClick={this.submit}
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon />}
                            style={{ fontFamily: "'Playfair Display', serif", background: "black" }}
                        >
                            Add Player
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}
export default Team;