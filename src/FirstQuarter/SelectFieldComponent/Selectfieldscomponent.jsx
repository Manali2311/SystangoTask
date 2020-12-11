import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import FaceIcon from '@material-ui/icons/Face';

class SelectComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="wrap">

                    <FormControl className="frm" variant="standard" error={(this.props.name == this.props.playererror) ? true : false} style={{ marginRight: "30px", marginLeft: "-20px" }}>
                        <InputLabel id="demo-simple-select-outlined-label">{this.props.name}</InputLabel>
                        <Select
                            className="Inputt"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.props.val}
                            onChange={this.props.playerChange}
                            name={this.props.name}
                            label={this.props.name}
                            startAdornment={
                                <InputAdornment position="start">
                                    <FaceIcon />
                                </InputAdornment>
                            }
                        >

                            {
                                (this.props.data != null) ? (this.props.data.length >= 5) ?
                                    this.props.data.map((ar, Index) => (

                                        <MenuItem key={Index} value={Index}>{ar.arrname} {ar.arrlastname}</MenuItem>

                                    ))
                                    : this.props.data.map((ar, Index) => (

                                        <MenuItem key={Index} value={Index}>{ar.arrname} {ar.arrlastname}</MenuItem>

                                    ))
                                    : <MenuItem value="">Please Add Players for the Team</MenuItem>
                            }
                        </Select>

                    </FormControl>


                    <FormControl variant="standard" error={(this.props.positionname == this.props.playererror) ? true : false}>
                        <InputLabel id="demo-simple-select-outlined-label">Position</InputLabel>

                        <Select
                            className="Input"
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.props.position}
                            onChange={this.props.positionchange}
                            name={this.props.positionname}
                            label="Position"
                        >

                            {
                                (this.props.data != null) ?
                                    this.props.data.map((ar, Index) => (
                                        (Index === this.props.val) ?
                                            ar.arrposition.map((p, Index) => (

                                                <MenuItem key={Index} value={p}>{p}</MenuItem>

                                            )) : null
                                    ))
                                    : null
                            }
                            {
                                (this.props.val === "") ?
                                    this.props.positionarray.map((pos, Index) => (
                                        <MenuItem key={Index} value={pos}>{pos}</MenuItem>
                                    )) : null
                            }

                        </Select>
                    </FormControl>
                </div>
            </div>
        )
    }
}
export default SelectComponent;