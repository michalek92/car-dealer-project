import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarCard from './CarCard.js';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

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
    render() {
        let car = {
            Mark: 'BMW',
            Model: 'M3',
            ID: 0,
            Price: 60000,
            Color: 'red',
            Img: 'https://www.autoscout24.pl/assets/auto/images/model/bmw/bmw-m3/bmw-m3-l-01.jpg',
            ShortInfo: 'Fusce a neque eu dui congue iaculis. Duis venenatis vulputate posuere. Nullam hendrerit congue est vel euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam libero augue, tempus et porttitor ac, porta at leo. Integer sed est eros. Maecenas eu facilisis diam. Mauris cursus ante a accumsan dapibus. Proin at dictum tortor. Cras eu risus at elit convallis ornare. Nunc ultrices porta tempor.',
            FullInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis lectus ac quam venenatis faucibus. Suspendisse et arcu sem. Fusce in vehicula nulla. Pellentesque quis elit ipsum. Suspendisse volutpat rhoncus nulla at vestibulum. In in posuere erat, ut euismod nunc. Maecenas sed ipsum quis leo aliquet feugiat in vel est. Integer facilisis, enim id malesuada hendrerit, leo orci porta tortor, at mollis nunc dolor sed nulla. Donec id dui mauris. Nunc vel ipsum accumsan, lobortis ipsum eu, posuere enim. Vivamus mi justo, porttitor non condimentum vel, molestie a tellus. Nullam eu massa et mi blandit malesuada at sed diam. Donec pulvinar, nibh vel imperdiet commodo, justo magna condimentum sapien, sed imperdiet lectus arcu vel tortor. Aliquam elementum ornare ligula, ut cursus risus tincidunt eu. Vivamus mattis elementum iaculis.Fusce a neque eu dui congue iaculis. Duis venenatis vulputate posuere. Nullam hendrerit congue est vel euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam libero augue, tempus et porttitor ac, porta at leo. Integer sed est eros. Maecenas eu facilisis diam. Mauris cursus ante a accumsan dapibus. Proin at dictum tortor. Cras eu risus at elit convallis ornare. Nunc ultrices porta tempor. Praesent facilisis rutrum leo, eu euismod velit tempor lacinia. Phasellus elementum, lorem non suscipit facilisis, ipsum erat eleifend eros, blandit gravida est nibh sit amet ligula. Mauris placerat lorem id commodo imperdiet. Quisque nec eleifend urna. Maecenas eu augue id lacus posuere dapibus. Suspendisse in dolor eget nulla sagittis volutpat. In venenatis turpis eu nunc finibus, accumsan porta sem aliquet. Aliquam vestibulum egestas mi, a interdum nulla. Ut quis orci tortor. Pellentesque sit amet ipsum sit amet est lacinia varius vel et nibh.'
        }
        let car2 = {
            Mark: 'Mercedes',
            Model: 'GLC',
            ID: 1,
            Price: 80000,
            Color: 'blue',
            Img: 'https://www.mercedes-benz.ca/content/dam/mb-nafta/ca/myco/my19/glc/coupe/class-page/non-amg/MBCAN-2018-GLC-COUPE-CAROUSEL-TOP-2-3-02-DR.jpg',
            ShortInfo: 'Fusce a neque eu dui congue iaculis. Duis venenatis vulputate posuere. Nullam hendrerit congue est vel euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam libero augue, tempus et porttitor ac, porta at leo. Integer sed est eros. Maecenas eu facilisis diam. Mauris cursus ante a accumsan dapibus. Proin at dictum tortor. Cras eu risus at elit convallis ornare. Nunc ultrices porta tempor.',
            FullInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis lectus ac quam venenatis faucibus. Suspendisse et arcu sem. Fusce in vehicula nulla. Pellentesque quis elit ipsum. Suspendisse volutpat rhoncus nulla at vestibulum. In in posuere erat, ut euismod nunc. Maecenas sed ipsum quis leo aliquet feugiat in vel est. Integer facilisis, enim id malesuada hendrerit, leo orci porta tortor, at mollis nunc dolor sed nulla. Donec id dui mauris. Nunc vel ipsum accumsan, lobortis ipsum eu, posuere enim. Vivamus mi justo, porttitor non condimentum vel, molestie a tellus. Nullam eu massa et mi blandit malesuada at sed diam. Donec pulvinar, nibh vel imperdiet commodo, justo magna condimentum sapien, sed imperdiet lectus arcu vel tortor. Aliquam elementum ornare ligula, ut cursus risus tincidunt eu. Vivamus mattis elementum iaculis.Fusce a neque eu dui congue iaculis. Duis venenatis vulputate posuere. Nullam hendrerit congue est vel euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam libero augue, tempus et porttitor ac, porta at leo. Integer sed est eros. Maecenas eu facilisis diam. Mauris cursus ante a accumsan dapibus. Proin at dictum tortor. Cras eu risus at elit convallis ornare. Nunc ultrices porta tempor. Praesent facilisis rutrum leo, eu euismod velit tempor lacinia. Phasellus elementum, lorem non suscipit facilisis, ipsum erat eleifend eros, blandit gravida est nibh sit amet ligula. Mauris placerat lorem id commodo imperdiet. Quisque nec eleifend urna. Maecenas eu augue id lacus posuere dapibus. Suspendisse in dolor eget nulla sagittis volutpat. In venenatis turpis eu nunc finibus, accumsan porta sem aliquet. Aliquam vestibulum egestas mi, a interdum nulla. Ut quis orci tortor. Pellentesque sit amet ipsum sit amet est lacinia varius vel et nibh.'
        }
        let car3 = {
            Mark: 'Nissan',
            Model: 'Juke',
            ID: 2,
            Price: 80000,
            Color: 'yellow',
            Img: 'https://www-europe.nissan-cdn.net/content/dam/Nissan/ireland/juke/f15/colorpickerassets/packshot_colorpicker_JUKE_326_medium.png.ximg.m_12_h.smart.png',
            ShortInfo: 'Fusce a neque eu dui congue iaculis. Duis venenatis vulputate posuere. Nullam hendrerit congue est vel euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam libero augue, tempus et porttitor ac, porta at leo. Integer sed est eros. Maecenas eu facilisis diam. Mauris cursus ante a accumsan dapibus. Proin at dictum tortor. Cras eu risus at elit convallis ornare. Nunc ultrices porta tempor.',
            FullInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis lectus ac quam venenatis faucibus. Suspendisse et arcu sem. Fusce in vehicula nulla. Pellentesque quis elit ipsum. Suspendisse volutpat rhoncus nulla at vestibulum. In in posuere erat, ut euismod nunc. Maecenas sed ipsum quis leo aliquet feugiat in vel est. Integer facilisis, enim id malesuada hendrerit, leo orci porta tortor, at mollis nunc dolor sed nulla. Donec id dui mauris. Nunc vel ipsum accumsan, lobortis ipsum eu, posuere enim. Vivamus mi justo, porttitor non condimentum vel, molestie a tellus. Nullam eu massa et mi blandit malesuada at sed diam. Donec pulvinar, nibh vel imperdiet commodo, justo magna condimentum sapien, sed imperdiet lectus arcu vel tortor. Aliquam elementum ornare ligula, ut cursus risus tincidunt eu. Vivamus mattis elementum iaculis.Fusce a neque eu dui congue iaculis. Duis venenatis vulputate posuere. Nullam hendrerit congue est vel euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam libero augue, tempus et porttitor ac, porta at leo. Integer sed est eros. Maecenas eu facilisis diam. Mauris cursus ante a accumsan dapibus. Proin at dictum tortor. Cras eu risus at elit convallis ornare. Nunc ultrices porta tempor. Praesent facilisis rutrum leo, eu euismod velit tempor lacinia. Phasellus elementum, lorem non suscipit facilisis, ipsum erat eleifend eros, blandit gravida est nibh sit amet ligula. Mauris placerat lorem id commodo imperdiet. Quisque nec eleifend urna. Maecenas eu augue id lacus posuere dapibus. Suspendisse in dolor eget nulla sagittis volutpat. In venenatis turpis eu nunc finibus, accumsan porta sem aliquet. Aliquam vestibulum egestas mi, a interdum nulla. Ut quis orci tortor. Pellentesque sit amet ipsum sit amet est lacinia varius vel et nibh.'
        }
        return (
            <div className={styles.root}>
                <Grid container spacing={25}>
                    <Grid item lg={12} md={12} xs={12}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                                </IconButton>
                                <Typography variant="h6" color="inherit" className={styles.grow}>
                                    Lorem Ipsum
                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <CarCard
                            car={car} />
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <CarCard
                            car={car2} />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <CarCard
                            car={car} />
                    </Grid>

                    <Grid item lg={4} md={6} xs={12}>
                        <CarCard
                            car={car2} />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <CarCard
                            car={car3} />
                    </Grid>
                </Grid>

            </div >

        );
    }
}

export default App;