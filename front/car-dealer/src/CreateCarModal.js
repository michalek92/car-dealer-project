import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
        };
    }

    componentDidMount() {
        //  this.getCars();
    }

    createCar = () =
> {
    axios
.

    post(

    'http://localhost:8080/cars'
, {
    url: this
.
    state
.
    urlInputValue
,
    shortInfo: this
.
    state
.
    shorInfoValue
,
    longInfo: this
.
    state
.
    longInfoValue
,
    carModelName: this
.
    state
.
    modelInputValue
,
    carMarkName: this
.
    state
.
    markInputValue
,
    carColor: 'YELLOW'
,
    price: this
.
    state
.
    priceInputValue
}

).
then(res = > {
    this.props.getCars();
this.props.closeCreateCarModal();
})
.
catch(function (thrown) {
    if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
    } else {
        // handle error
    }
});
}

render()
{

    return (
        < Dialog
    open = {this.props.showModalAddCar}
    onClose = {this.props.closeCreateCarModal}
    aria - labelledby = "form-dialog-title"
        >
        < DialogTitle
    id = "form-dialog-title" > Dodawanie
    samochodu < /DialogTitle>
    < DialogContent >
    < DialogContentText >
    Dodaj
    poniższe
    informacje
    i
    zatwierdź
    w
    celu
    dodania
    auta
    < /DialogContentText>
    < TextField
    autoFocus
    margin = "dense"
    id = "name"
    label = "Marka"
    type = "text"
    value = {this.state.markInputValue}
    onChange = {(event) =
>
    {
        this.setState({markInputValue: event.target.value})
    }
}
    fullWidth
    / >
    < TextField
    margin = "dense"
    id = "name"
    label = "Model"
    type = "text"
    value = {this.state.modelInputValue}
    onChange = {(event) =
>
    {
        this.setState({modelInputValue: event.target.value})
    }
}
    fullWidth
    / >
    < TextField
    margin = "dense"
    id = "name"
    label = "Cena"
    type = "number"
    value = {this.state.priceInputValue}
    onChange = {(event) =
>
    {
        this.setState({priceInputValue: event.target.value})
    }
}
    fullWidth
    / >
    < TextField
    margin = "dense"
    id = "name"
    label = "Kolor"
    type = "color"
    value = {this.state.colorInputValue}
    onChange = {(event) =
>
    {
        this.setState({colorInputValue: event.target.value})
    }
}
    fullWidth
    / >
    < TextField
    margin = "dense"
    id = "name"
    label = "Link do zdjęcia"
    type = "text"
    value = {this.state.urlInputValue}
    onChange = {(event) =
>
    {
        this.setState({urlInputValue: event.target.value})
    }
}
    fullWidth
    / >
    < TextField
    margin = "dense"
    id = "name"
    label = "Krótka informacja"
    type = "text"
    value = {this.state.shorInfoValue}
    onChange = {(event) =
>
    {
        this.setState({shorInfoValue: event.target.value})
    }
}
    fullWidth
    / >
    < TextField
    margin = "dense"
    id = "name"
    label = "Dluga informacja"
    type = "text"
    value = {this.state.longInfoValue}
    onChange = {(event) =
>
    {
        this.setState({longInfoValue: event.target.value})
    }
}
    fullWidth
    / >
    < /DialogContent>
    < DialogActions >
    < Button
    onClick = {this.props.closeCreateCarModal}
    variant = "outlined"
    color = "primary" >
        Anuluj
        < /Button>
        < Button
    onClick = {this.createCar}
    variant = "outlined"
    color = "primary" >
        Dodaj
        < /Button>
        < /DialogActions>
        < /Dialog>
)
    ;
}
}

export default CreateCarModal;