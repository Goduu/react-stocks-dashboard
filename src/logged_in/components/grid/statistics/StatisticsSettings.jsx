import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    List,
    ListItem,
    ListSubheader,
    makeStyles,
    Menu, MenuItem
} from '@material-ui/core/';
import { useEffect } from 'react';
import _ from 'lodash'
import { useTranslation } from 'react-i18next';

export default function StatisticsSettings(props) {
    const { saveSettings, setType, type, handleClose, setOpen, open } = props;
    // const [open, setOpen] = useState(props.open);
    const [statistics, setStatistics] = useState(props.statistics);
    const { t } = useTranslation();

    const statisticsKeys = ['keyStatistics', 'summaryDetail', 'financialData']

    // useEffect(() => {
    //     setStatistics(props.statistics)
    // }, [props.statistics])

    const handleSave = (value) => {
        saveSettings(value);
        setOpen(false);
        // setSelectedValue(value);
    };

    const useStyles = makeStyles((theme) => ({
        list: {
            maxHeight: '400px',
            overflow: 'scroll',
            overflowX: 'hidden',
            width: '100%'
        },
        dialog: {
            overflowX: 'hidden',
            width: '100%'

        }

    }));
    const classes = useStyles();




    return (
        <Dialog className={classes.dialog} onClose={handleClose} fullWidth open={open}>
            <DialogTitle >Select your Statistic</DialogTitle>

            <DialogContent>
                <Button onClick={() => {console.log(type)}}> asd</Button>

                <Grid container spacing={1} direction="row" justifyContent="center">
                    <Grid container item xs={6} >
                        <List>
                            <ListSubheader >
                                Groups
                            </ListSubheader>
                            {statisticsKeys && statisticsKeys.map((key) => {
                                return (
                                    <ListItem button
                                        key={key}
                                        value={key}
                                        onClick={() => setType(key)}
                                    >
                                        {key}
                                    </ListItem >
                                );
                            }
                            )}
                        </List>
                    </Grid>
                    <Grid container item xs={6} >
                        <div className={classes.list}>
                            <List component="div">
                                <ListSubheader >
                                    Statistics
                                </ListSubheader>
                                {statistics[type] && Object.keys(statistics[type]).map((key) => {
                                    return (
                                        <ListItem button
                                            key={key}
                                            value={key}
                                            onClick={() => handleSave(key)}
                                        >
                                            {t(type + '.' + key)}


                                        </ListItem >
                                    );
                                }
                                )}
                            </List>
                        </div>
                    </Grid>

                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>

        </Dialog>

    );
}

