import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';

const styles = theme => ({
  card: {
    // width: 300,
    // height: 450
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CarCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  deleteCar = () => {
    axios.delete('http://localhost:8080/cars/' + this.props.car.id, { crossdomain: true })
      .then(res => {
        this.props.refreshCars();
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
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" style={{ backgroundColor: '#3f51b5' }}>
              {/* <span style={{ filter: this.props.car.carColor == 'WHITE' ? 'invert(50%)' : 'invert(0%)' }}> */}
              {this.props.car.carMarkName[0]}
              {/* </span> */}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.car.carMarkName + ' ' + this.props.car.carModelName}
          subheader={"cena: " + this.props.car.price + '\n' + 'kolor: ' + this.props.car.carColor}
        />
        <CardMedia
          className={classes.media}
          image={this.props.car.url}
          title="Paella dish"
        />
        <CardContent>
          <Typography style={{ overflow: 'auto', height: '50px' }} component="p">
            {this.props.car.shortInfo}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <EditIcon onClick={() => { this.props.editCar(this.props.car.id) }} />
          </IconButton>
          <IconButton aria-label="Share">
            <DeleteIcon onClick={() => { this.deleteCar() }} />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {this.props.car.longInfo}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

CarCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CarCard);
