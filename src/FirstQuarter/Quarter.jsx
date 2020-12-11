import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quarter.css';
import SelectComponent from './SelectFieldComponent/Selectfieldscomponent';
import SyncIcon from '@material-ui/icons/Sync';

class Quarter extends React.Component {
    constructor() {
        super();

        let Data = localStorage.getItem("Data");
        Data = JSON.parse(Data);

        this.state = {
            player1: "",
            player2: "",
            player3: "",
            player4: "",
            player5: "",
            position: ["Point Guard (PG)", "Shooting Guard (SG)", "Small Forward (SF)", "Power Forward (PF)", "center (C)"],

            Dataa: Data,
            Team: [
                {
                    playername: "",
                    playerposition: ""
                }
            ],

            position1: "",
            position2: "",
            position3: "",
            position4: "",
            position5: "",

            playererror: false,
            playerhelper: "",

        }
    }

    playerchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {

            if (e.target.name === "player1") {
                if (e.target.value === this.state.player2 || e.target.value === this.state.player3 || e.target.value === this.state.player4 || e.target.value === this.state.player5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Player can be selected only once",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "player2") {
                if (e.target.value === this.state.player1 || e.target.value === this.state.player3 || e.target.value === this.state.player4 || e.target.value === this.state.player5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Player can be selected only once",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "player3") {
                if (e.target.value === this.state.player1 || e.target.value === this.state.player2 || e.target.value === this.state.player4 || e.target.value === this.state.player5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Player can be selected only once",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "player4") {
                if (e.target.value === this.state.player1 || e.target.value === this.state.player3 || e.target.value === this.state.player2 || e.target.value === this.state.player5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Player can be selected only once",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "player5") {
                if (e.target.value === this.state.player1 || e.target.value === this.state.player3 || e.target.value === this.state.player4 || e.target.value === this.state.player2) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Player can be selected only once",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
        })
    }


    positionchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {

            if (e.target.name === "position1") {
                if (e.target.value === this.state.position2 || e.target.value === this.state.position3 || e.target.value === this.state.position4 || e.target.value === this.state.position5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Position already occupied",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "position2") {
                if (e.target.value === this.state.position1 || e.target.value === this.state.position3 || e.target.value === this.state.position4 || e.target.value === this.state.position5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Position already occupied",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "position3") {
                if (e.target.value === this.state.position1 || e.target.value === this.state.position2 || e.target.value === this.state.position4 || e.target.value === this.state.position5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Position already occupied",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "position4") {
                if (e.target.value === this.state.position1 || e.target.value === this.state.position2 || e.target.value === this.state.position3 || e.target.value === this.state.position5) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Position already occupied",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
            else if (e.target.name === "position5") {
                if (e.target.value === this.state.position1 || e.target.value === this.state.position2 || e.target.value === this.state.position3 || e.target.value === this.state.position4) {
                    this.setState({
                        playererror: [e.target.name],
                        playerhelper: "*Position already occupied",
                        [e.target.name]: ""
                    })
                }
                else {
                    this.setState({
                        playererror: false,
                        playerhelper: "",
                    })
                }
            }
        })
    }



    valid = () => {

        if ((!this.state.player1.length) && (!this.state.player2.length) && !this.state.player3.length && !this.state.player4.length &&
            !this.state.player5.length && !this.state.position1.length && !this.state.position2.length && !this.state.position3.length &&
            !this.state.player4.length && !this.state.player5.length) {
            this.setState({
                playerhelper: "*Please fill all the feilds"
            })
            return false;
        }

        else if (this.state.player1 === "") {
            this.setState({
                playerhelper: "*Player-1 is required"
            })
            return false;
        }

        else if (this.state.player2 === "") {
            this.setState({
                playerhelper: "*Player-2 is required"
            })
            return false;
        }

        else if (this.state.player3 === "") {
            this.setState({
                playerhelper: "*Player-3 is required"
            })
            return false;
        }

        else if (this.state.player4 === "") {
            this.setState({
                playerhelper: "*Player-4 is required"
            })
            return false;
        }

        else if (this.state.player5 === "") {
            this.setState({
                playerhelper: "*Player-5 is required"
            })
            return false;
        }

        else if (!this.state.position1.length) {
            this.setState({
                playerhelper: "*Position-1 is required"
            })
            return false;
        }

        else if (!this.state.position2.length) {
            this.setState({
                playerhelper: "*Position-2 is required"
            })
            return false;
        }

        else if (!this.state.position3.length) {
            this.setState({
                playerhelper: "*Position-3 is required"
            })
            return false;
        }

        else if (!this.state.position4.length) {
            this.setState({
                playerhelper: "*Position-4 is required"
            })
            return false;
        }

        else if (!this.state.position5.length) {
            this.setState({
                playerhelper: "*Position-5 is required"
            })
            return false;
        }

        else {
            return true;
        }
    }


    submit = (e) => {
        e.preventDefault();
        if (this.valid()) {
            toast("🚀 Team is all set to play! Best Of Luck", {
                type: "success"
            })


            if (this.state.Team[0].playername === "") {
                this.state.Team.pop()
            }
            if (this.state.Dataa[this.state.player1]) {
                this.state.Team.push({ playername: this.state.Dataa[this.state.player1].arrname, playerposition: this.state.position1 })
            }
            if (this.state.Dataa[this.state.player2]) {
                this.state.Team.push({ playername: this.state.Dataa[this.state.player2].arrname, playerposition: this.state.position2 })
            }
            if (this.state.Dataa[this.state.player3]) {
                this.state.Team.push({ playername: this.state.Dataa[this.state.player3].arrname, playerposition: this.state.position3 })
            }
            if (this.state.Dataa[this.state.player4]) {
                this.state.Team.push({ playername: this.state.Dataa[this.state.player4].arrname, playerposition: this.state.position4 })
            }
            if (this.state.Dataa[this.state.player5]) {
                this.state.Team.push({ playername: this.state.Dataa[this.state.player5].arrname, playerposition: this.state.position5 })
            }
            else {
                console.log("Nothing")
            }


            this.setState({
                Team: this.state.Team
            })

            localStorage.setItem("Team", JSON.stringify(this.state.Team));

            let Teams = localStorage.getItem("Team");
            Teams = JSON.parse(Teams);

            console.log(Teams)

            this.setState({
                player1: "",
                player2: "",
                player3: "",
                player4: "",
                player5: "",
                position1: "",
                position2: "",
                position3: "",
                position4: "",
                position5: "",
            })

        }
    }

    reset = () => {
        this.setState({
            player1: "",
            player2: "",
            player3: "",
            player4: "",
            player5: "",
            position1: "",
            position2: "",
            position3: "",
            position4: "",
            position5: "",
        })
    }

    render() {
        return (
            <div className="OuterDiv">
                <div className="Innerdiv">
                    <form className="Formclass">
                        <br />
                        <SelectComponent name="player1" positionname="position1" positionarray={this.state.position} helper={this.state.playerhelper}
                            positionchange={this.positionchange} data={this.state.Dataa} position={this.state.position1}
                            val={this.state.player1} playererror={this.state.playererror} playerChange={this.playerchange} />

                        <br />
                        <br />

                        <SelectComponent name="player2" positionname="position2" positionarray={this.state.position}
                            positionchange={this.positionchange} data={this.state.Dataa} position={this.state.position2}
                            val={this.state.player2} playererror={this.state.playererror} playerChange={this.playerchange} />

                        <br />
                        <br />

                        <SelectComponent name="player3" positionname="position3" positionarray={this.state.position}
                            positionchange={this.positionchange} data={this.state.Dataa} position={this.state.position3}
                            val={this.state.player3} playererror={this.state.playererror} playerChange={this.playerchange} />

                        <br />
                        <br />

                        <SelectComponent name="player4" positionname="position4" positionarray={this.state.position}
                            positionchange={this.positionchange} data={this.state.Dataa} position={this.state.position4}
                            val={this.state.player4} playererror={this.state.playererror} playerChange={this.playerchange} />

                        <br />
                        <br />

                        <SelectComponent name="player5" positionname="position5" positionarray={this.state.position}
                            positionchange={this.positionchange} data={this.state.Dataa} position={this.state.position5}
                            val={this.state.player5} playererror={this.state.playererror} playerChange={this.playerchange} />
                        <br />

                        <ToastContainer autoClose={4000} hideProgressBar={false} />
                        <b style={{ color: "red", fontFamily: "'Playfair Display', serif", fontSize: "15px" }}>{this.state.playerhelper}</b>
                        <div className="buttonstyles">
                            <Button
                                type="submit"
                                onClick={this.reset}
                                variant="contained"
                                color="primary"
                                endIcon={<SyncIcon />}
                                style={{ fontFamily: "'Playfair Display', serif", background: "black" }}
                            >
                                Reset
                        </Button>

                            <Button
                                type="submit"
                                onClick={this.submit}
                                variant="contained"
                                color="primary"
                                endIcon={<SaveIcon />}
                                style={{ fontFamily: "'Playfair Display', serif", marginLeft: "7px", background: "Green" }}
                            >
                                Save
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Quarter;
