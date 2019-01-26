import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CarCard from './CarCard.js';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import logo from './img/logo.png';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateCarModal from './CreateCarModal';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UpdateCarModal from './UpdateCarModal';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CardHeader from '@material-ui/core/CardHeader';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const styles2 = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            cars: [],
            showModalAddCar: false,
            showModalUpdateCar: false,
            actualSelectedCarData: null,
            carFilterName: '',
            markInputValue: '',
            modelInputValue: '',
            marks: [],
            models: [],
            newMarkInput: '',
            newModelInput: '',
            newModelMarkInputValue: '',
            priceFrom: 0,
            priceTo: '',
        };
    }

    componentDidMount() {
        this.getCars();
        this.getMarks();
    }

    getCars = () => {
        axios.get('http://localhost:8080/cars', { crossdomain: true })
            .then(res => {
                this.setState({ cars: res.data });
            })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    // handle error
                }
            });
    }

    getMarks = () => {
        axios.get('http://localhost:8080/marks', { crossdomain: true })
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
        if (markSelected == '') {
            this.setState({ models: [] })
        } else {
            axios.get('http://localhost:8080/marks/' + markSelected + '/models/', { crossdomain: true })
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
    }

    addNewMark = () => {
        axios.post('http://localhost:8080/marks', {
            mark: this.state.newMarkInput
        }).then(res => {
            this.getMarks();
        })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    // handle error
                }
            });
    }

    addNewModel = () => {
        axios.post('http://localhost:8080/marks/' + this.state.newModelMarkInputValue + '/models', {
            model: this.state.newModelInput
        }).then(res => {

        })
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    // handle error
                }
            });
    }

    editCar = (carId) => {
        let actualSelectedCarData = this.state.cars.find(a => a.id == carId);
        this.setState({ actualSelectedCarData: actualSelectedCarData, showModalUpdateCar: true })
    }

    addNewClicked = () => {
        this.setState({ showModalAddCar: true });
    }

    closeCreateCarModal = () => {
        this.setState({ showModalAddCar: false });
    }

    closeUpdateCarModal = () => {
        this.setState({ showModalUpdateCar: false })
    }

    render() {

        return (
            <div className={styles.root}>
                <Grid container spacing={0}>
                    <Grid direction="column" item lg={12} md={12} xs={12}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                                    <img src={logo} alt="fireSpot" />
                                </IconButton>
                                <Typography variant="h6" color="inherit" className={styles.grow}>
                                </Typography>
                                {/* <Button onClick={() => { this.setState({ showModalAddCar: true }) }} variant="outlined" color="inherit"><AddIcon />Dodaj samochód</Button> */}

                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>

                <div style={{ marginLeft: '200px', marginRight: '200px' }}>

                    {/* <Button fullWidth onClick={() => { this.setState({ showModalAddCar: true }) }} variant="outlined" color="inherit"><AddIcon />Dodaj samochód</Button> */}


                    <br />
                    <div style={{ width: '100%' }}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>

                                <Typography >Filtry</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <FormControl variant="filled" style={{ minWidth: '250px', marginRight: '5px', marginLeft: '5px' }}>
                                    <InputLabel htmlFor="age-simple">Marka</InputLabel>
                                    <Select
                                        fullWidth
                                        value={this.state.markInputValue}
                                        onChange={(event) => {
                                            this.setState({ markInputValue: event.target.value, modelInputValue: '' });
                                            this.getModels(event.target.value)
                                        }}
                                        inputProps={{
                                            name: 'marka',
                                            id: 'age-simple',
                                        }}
                                        input={
                                            <OutlinedInput
                                                labelWidth={this.state.labelWidth}
                                                name="age"
                                                id="outlined-age-simple"
                                            />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.state.marks.map((mark, index) => {
                                            return <MenuItem value={mark}>{mark}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>

                                <FormControl variant="filled" style={{ minWidth: '250px', marginRight: '5px', marginLeft: '5px' }}>
                                    <InputLabel htmlFor="age-simple">Model</InputLabel>
                                    <Select
                                        fullWidth
                                        value={this.state.modelInputValue}
                                        onChange={(event) => { this.setState({ modelInputValue: event.target.value }) }}
                                        inputProps={{
                                            name: 'model',
                                            id: 'age-simple',
                                        }}
                                        disabled={this.state.models.length < 1 ? true : false}
                                        input={
                                            <OutlinedInput
                                                labelWidth={this.state.labelWidth}
                                                name="age"
                                                id="outlined-age-simple"
                                            />}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {this.state.models.map((model, index) => {
                                            return <MenuItem value={model}>{model}</MenuItem>
                                        })}

                                    </Select>
                                </FormControl>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="Cena od"
                                    type="number"
                                    value={this.state.priceFrom}
                                    onChange={(event) => { this.setState({ priceFrom: event.target.value }) }}
                                    fullWidth
                                    variant="outlined"
                                />
                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="Cena do"
                                    type="number"
                                    value={this.state.priceTo}
                                    onChange={(event) => { this.setState({ priceTo: event.target.value }) }}
                                    fullWidth
                                    variant="outlined"
                                />

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Dodawanie</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Grid container alignItems="center" justify="center" spacing={0}>
                                    <Grid item lg={12} md={12} xs={12}>
                                        <h3>Dodaj markę:</h3>

                                        <TextField
                                            margin="dense"
                                            id="name"
                                            label="Nowa marka"
                                            type="text"
                                            value={this.state.newMarkInput}
                                            onChange={(event) => { this.setState({ newMarkInput: event.target.value }) }}
                                            fullWidth
                                            variant="outlined"
                                        />
                                        <Button fullWidth onClick={() => { this.addNewMark() }} variant="outlined" color="inherit"><AddIcon />Dodaj markę</Button>
                                    </Grid>
                                    <Grid item lg={12} md={12} xs={12}>
                                        <h3>Dodaj model (należy najpierw wybrać model):</h3>

                                        <FormControl variant="filled" style={{ minWidth: '100%' }}>

                                            <InputLabel htmlFor="age-simple">Marka</InputLabel>
                                            <Select
                                                fullWidth
                                                value={this.state.newModelMarkInputValue}
                                                onChange={(event) => {
                                                    this.setState({ newModelMarkInputValue: event.target.value, modelInputValue: '' });
                                                }}
                                                inputProps={{
                                                    name: 'marka',
                                                    id: 'age-simple',
                                                }}
                                                input={
                                                    <OutlinedInput
                                                        labelWidth={this.state.labelWidth}
                                                        name="age"
                                                        id="outlined-age-simple"
                                                    />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {this.state.marks.map((mark, index) => {
                                                    return <MenuItem value={mark}>{mark}</MenuItem>
                                                })}

                                            </Select>
                                        </FormControl>
                                        <TextField
                                            margin="dense"
                                            id="name"
                                            label="Nowy model"
                                            type="text"
                                            value={this.state.newModelInput}
                                            onChange={(event) => { this.setState({ newModelInput: event.target.value }) }}
                                            fullWidth
                                            variant="outlined"
                                        />


                                        <Button disabled={this.state.newModelMarkInputValue == '' || this.state.newModelInput == ''} fullWidth onClick={() => { this.addNewModel() }} variant="outlined" color="inherit"><AddIcon />Dodaj model</Button>
                                    </Grid>
                                </Grid>



                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    <h2>Dostępne samochody:</h2>
                    <Grid container alignItems="center" justify="center" spacing={0}>


                        {this.state.cars.map((element, index) => {
                            if (this.state.markInputValue != '') {
                                if (element.carMarkName != this.state.markInputValue) {
                                    return null
                                } else {
                                    if (this.state.modelInputValue != '') {
                                        if (element.carModelName != this.state.modelInputValue) {
                                            return null
                                        }
                                    }
                                }
                            }
                            if (this.state.priceFrom != '' && this.state.priceFrom > parseInt(element.price)) {
                                return null
                            }
                            if (this.state.priceTo != '' && this.state.priceTo < parseInt(element.price)) {
                                return null
                            }
                            return <Grid style={{ top: '3px' }} item lg={3} md={6} xs={12}>
                                <CarCard
                                    car={element}
                                    refreshCars={() => { this.getCars() }}
                                    editCar={this.editCar} />
                            </Grid>
                        })}

                        <Grid alignItems="center" item lg={3} md={6} xs={12}>
                            <Card style={{ height: '450px' }} >

                                <CardContent>
                                    <center>
                                        <Fab onClick={this.addNewClicked} variant="extended" color="primary" style={{ marginTop: '50%' }} aria-label="Add" >
                                            <AddIcon />
                                            Dodaj nowy
                                        </Fab>
                                    </center>
                                </CardContent>

                            </Card>
                        </Grid>

                        {this.state.showModalAddCar && <CreateCarModal
                            showModalAddCar={this.state.showModalAddCar}
                            closeCreateCarModal={this.closeCreateCarModal}
                            getCars={this.getCars}
                        />
                        }

                        {this.state.showModalUpdateCar && <UpdateCarModal
                            showModalUpdateCar={this.state.showModalUpdateCar}
                            closeUpdateCarModal={this.closeUpdateCarModal}
                            actualSelectedCarData={this.state.actualSelectedCarData}
                            getCars={this.getCars}
                        />}
                    </Grid>
                </div>
            </div >

        );
    }
}

export default App;