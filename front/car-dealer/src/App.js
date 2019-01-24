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
            showModalUpdateCar: false,
            actualSelectedCarData: null,
            carFilterName: ''
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
editCar = (carId) =
>
{
    let actualSelectedCarData = this.state.cars.find(a = > a.id == carId
)
    ;
    this.setState({actualSelectedCarData: actualSelectedCarData, showModalUpdateCar: true})
}

addNewClicked = () =
>
{
    this.setState({showModalAddCar: true});
}

closeCreateCarModal = () =
>
{
    this.setState({showModalAddCar: false});
}

closeUpdateCarModal = () =
>
{
    this.setState({showModalUpdateCar: false})
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
        < Button
    onClick = {() =
>
    {
        this.setState({showModalAddCar: true})
    }
}
    variant = "outlined"
    color = "inherit" > < AddIcon / > Dodaj
    samochód < /Button>

                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>

                <div style={{ marginLeft: '200px', marginRight: '200px' }}>
                    <h2>Dostępne samochody:</h2>
    < Button
    onClick = {() =
>
    {
        this.setState({carFilterName: 'MERCEDES'})
    }
}
    variant = "outlined"
    color = "inherit" > Mercedes < /Button>
        < Button
    onClick = {() =
>
    {
        this.setState({carFilterName: 'AUDI'})
    }
}
    variant = "outlined"
    color = "inherit" > Audi < /Button>
        < Button
    onClick = {() =
>
    {
        this.setState({carFilterName: ''})
    }
}
    variant = "outlined"
    color = "inherit" > Wszystkie < /Button>
        <Grid container alignItems="center" justify="center" spacing={0}>


        {
            this.state.cars.map((element) = > {
                if(this.state.carFilterName != ''
)
    {
        if (element.carMarkName != this.state.carFilterName) {
            return null
        }
    }
    return
<
    Grid
    item
    lg = {3}
    md = {6}
    xs = {12} >
        < CarCard
    car = {element}
    refreshCars = {() =
>
    {
        this.getCars()
    }
}
    editCar = {this.editCar}
    />
    < /Grid>
})
}

                        <Grid alignItems="center" item lg={3} md={6} xs={12}>
                            <Card style={{ height: '450px' }} >
                                <CardContent>
                                    <center>
    < Fab
    onClick = {this.addNewClicked}
    variant = "extended"
    color = "primary"
    style = {
    {
        marginTop: '50%'
    }
}
    aria - label = "Add" >
        < AddIcon / >
        Dodaj
    nowy
                                        </Fab>
                                    </center>
                                </CardContent>

                            </Card>
                        </Grid>

    {
        this.state.showModalAddCar && < CreateCarModal
        showModalAddCar = {this.state.showModalAddCar}
        closeCreateCarModal = {this.closeCreateCarModal}
        getCars = {this.getCars}
        />
    }

    {
        this.state.showModalUpdateCar && < UpdateCarModal
        showModalUpdateCar = {this.state.showModalUpdateCar}
        closeUpdateCarModal = {this.closeUpdateCarModal}
        actualSelectedCarData = {this.state.actualSelectedCarData}
        getCars = {this.getCars}
        />}
                    </Grid>
                </div>
            </div >

        );
    }
}

export default App;