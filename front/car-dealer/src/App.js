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


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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

class App extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            cars: [],
            showModalAddCar: false,
            markInputValue: '',
            modelInputValue: '',
            priceInputValue: 0,
            colorInputValue: '',
            urlInputValue: '',
            shorInfoValue: '',
            longInfoValue: '',
        };
    }
    componentDidMount() {
        this.getCars();
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
    createCar = () => {
        axios.post('http://localhost:8080/cars', {
            url: this.state.urlInputValue,
            shortInfo: this.state.shorInfoValue,
            longInfo: this.state.longInfoValue,
            carModelName: this.state.modelInputValue,
            carMarkName: this.state.markInputValue,
            carColor: 'YELLOW',
            price: this.state.priceInputValue
        }).then(res => {
            this.setState({ showModalAddCar: false });
            this.getCars();
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
                                <Button onClick={() => { this.setState({ showModalAddCar: true }) }} color="inherit">Dodaj samochód</Button>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>

                <div style={{ marginLeft: '200px', marginRight: '200px' }}>
                    <h2>Dostępne samochody:</h2>
                    <Grid container alignItems="center" justify="center" spacing={0}>

                        <Grid alignItems="center" item lg={3} md={6} xs={12}>
                            <Card style={{ height: '450px' }} >
                                <CardContent>
                                    <center>


                                        <Fab color="primary" style={{marginTop: '50%'}} aria-label="Add" >
                                            <AddIcon onClick={() => { this.setState({ showModalAddCar: true }) }} />
                                        </Fab>
                                    </center>
                                </CardContent>

                            </Card>
                        </Grid>
                        {this.state.cars.map((element) => {
                            return <Grid item lg={3} md={6} xs={12}>
                                <CarCard
                                    car={element}
                                    refreshCars={() => { this.getCars() }} />
                            </Grid>
                        })}


                        <Dialog
                            open={this.state.showModalAddCar}
                            onClose={() => { this.setState({ showModalAddCar: false }) }}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Dodawanie samochodu</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Dodaj poniższe informacje i zatwierdź w celu dodania auta
                                </DialogContentText>
                                <TextField
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
                                />
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
                                <Button onClick={() => { this.setState({ showModalAddCar: false }) }} color="primary">
                                    Anuluj
                                </Button>
                                <Button onClick={this.createCar} color="primary">
                                    Dodaj
                                </Button>
                            </DialogActions>
                        </Dialog>



                    </Grid>
                </div>
            </div >

        );
    }
}

export default App;