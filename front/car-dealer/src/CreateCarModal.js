import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class CreateCarModal extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            markInputValue: '',
            modelInputValue: '',
            priceInputValue: 0,
            colorInputValue: '',
            urlInputValue: '',
            shorInfoValue: '',
            longInfoValue: '',
            marks: [],
            models: [],
        };
    }

    componentDidMount() {
        //  this.getCars();
        this.getMarks()
    }

    getMarks = () => {
        axios.get('http://localhost:8080/cars/marks', { crossdomain: true })
            .then(res => {
                this.setState({ marks: res.data });
            })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    // handle error
                }
            });
    }

    getModels = (markSelected) => {
        axios.get('http://localhost:8080/cars/models/' + markSelected, { crossdomain: true })
            .then(res => {
                this.setState({ models: res.data });
            })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    // handle error
                }
            });
    }

    createCar = () => {
        axios.post('http://localhost:8080/cars', {
            url: this.state.urlInputValue,
            shortInfo: this.state.shorInfoValue,
            longInfo: this.state.longInfoValue,
            carModelName: this.state.modelInputValue,
            carMarkName: this.state.markInputValue,
            carColor: this.state.colorInputValue,
            price: this.state.priceInputValue
        }).then(res => {
            this.props.getCars();
            this.props.closeCreateCarModal();
        })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    // handle error
                }
            });
    }

    render() {

        return (
            <Dialog
                open={this.props.showModalAddCar}
                onClose={this.props.closeCreateCarModal}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Dodawanie samochodu</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Dodaj poniższe informacje i zatwierdź w celu dodania auta
                </DialogContentText>
                    <FormControl >
                        <InputLabel htmlFor="age-simple">Marka</InputLabel>
                        <Select
                            fullWidth
                            value={this.state.markInputValue}
                            onChange={(event) => {
                                this.setState({ markInputValue: event.target.value });
                                this.getModels(event.target.value)
                            }}
                            inputProps={{
                                name: 'marka',
                                id: 'age-simple',
                            }}
                        >
                            {this.state.marks.map((mark, index) => {
                                return <MenuItem value={mark}>{mark}</MenuItem>
                            })}

                        </Select>
                    </FormControl>
                    <FormControl >
                        <InputLabel htmlFor="age-simple">Model</InputLabel>
                        <Select
                            style={{ width: '100%' }}
                            fullWidth
                            value={this.state.modelInputValue}
                            onChange={(event) => { this.setState({ modelInputValue: event.target.value }) }}
                            inputProps={{
                                name: 'model',
                                id: 'age-simple',
                            }}
                            disabled={this.state.models.length < 1 ? true : false}
                        >
                            {this.state.models.map((model, index) => {
                                return <MenuItem value={model}>{model}</MenuItem>
                            })}

                        </Select>
                    </FormControl>
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Marka"
                        type="text"
                        value={this.state.markInputValue}
                        onChange={(event) => { this.setState({ markInputValue: event.target.value }) }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Model"
                        type="text"
                        value={this.state.modelInputValue}
                        onChange={(event) => { this.setState({ modelInputValue: event.target.value }) }}
                        fullWidth
                    /> */}
                    <TextField
                        margin="dense"
                        id="name"
                        label="Cena"
                        type="number"
                        value={this.state.priceInputValue}
                        onChange={(event) => { this.setState({ priceInputValue: event.target.value }) }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Kolor"
                        type="color"
                        value={this.state.colorInputValue}
                        onChange={(event) => { this.setState({ colorInputValue: event.target.value }) }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Link do zdjęcia"
                        type="text"
                        value={this.state.urlInputValue}
                        onChange={(event) => { this.setState({ urlInputValue: event.target.value }) }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Krótka informacja"
                        type="text"
                        value={this.state.shorInfoValue}
                        onChange={(event) => { this.setState({ shorInfoValue: event.target.value }) }}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Dluga informacja"
                        type="text"
                        value={this.state.longInfoValue}
                        onChange={(event) => { this.setState({ longInfoValue: event.target.value }) }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closeCreateCarModal} variant="outlined" color="primary">
                        Anuluj
                </Button>
                    <Button onClick={this.createCar} variant="outlined" color="primary">
                        Dodaj
                </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default CreateCarModal;