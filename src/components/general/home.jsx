import React from 'react'
import {
    Card,
    Container,
    Table, TableRow, TableHead, TableBody, TableCell
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon'

import units from '../../data/units'

const useStyles = makeStyles({
    card: {
        boxShadow: '0px 3px 2px -3px rgba(0,0,0,.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.2)',
    }
})

function Home(){
    return (
        <div>
            <Container maxWidth='lg'>
                <div style={{textAlign: 'center', margin: '20px 0'}}>
                    <span
                        style={{
                            fontFamily: 'Fredericka the Great',
                            fontSize: 60,
                        }}>
                        Calavo Street Industrial
                    </span>

                    <div>
                        <span>
                            <a
                                target='_blank'
                                href="https://www.google.com/maps/place/110+S+Calavo+St,+Santa+Paula,+CA+93060/@34.3399911,-119.0894452,17.42z/data=!4m5!3m4!1s0x80e9b50124bf64c5:0x90bad8b3f389389e!8m2!3d34.3400851!4d-119.0877226">
                                110 S Calavo St, Santa Paula, CA 93060
                            </a>
                        </span>
                    </div>
                </div>
                <img
                    src="/static/img/carousel_1.jpg"
                    alt="building from calavo street"
                    style={{width: '100%', marginBottom: 20, borderRadius: 4}}
                    />
                <UnitTable name={'106 Calavo Street'} units={units.calavo106} />
                <UnitTable name={'108 Calavo Street'} units={units.calavo108} />
                <UnitTable name={'110 Calavo Street'} units={units.calavo110} />
                <UnitTable name={'120 Calavo Street'} units={units.calavo120} />

                <div style={{height:50}}></div>
            </Container>

        </div>
    )
}

function UnitTable(props) {
    const classes = useStyles()
    const units = props.units

    const avail = units.filter((x) => x.is_available).length
    const chip_color = avail ? 'lightgreen': 'lightgrey'
    return (
        <Card className={classes.card} style={{marginTop:20}}>
            <div style={{textAlign: 'center'}}>
                <div style={{display: 'inline-block', width: '90%', textAlign: 'left'}}>
                    <div>
                        <div style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            margin: '20px 0px',
                            display: 'inline-block'
                        }}>
                            {props.name}
                        </div>
                        <div
                            style={{
                                display: 'inline-block',
                                borderRadius: 7,
                                background: chip_color,
                                padding: '3px 8px',
                                verticalAlign: 'text-bottom',
                                marginLeft: 15,
                            }}>
                            {avail} Available
                        </div>
                    </div>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Unit</TableCell>
                                    <TableCell>Square Feet (Indoor)</TableCell>
                                    <TableCell>Square Feet (Outdoor)</TableCell>
                                    <TableCell>Rent</TableCell>
                                    <TableCell>Available</TableCell>
                                    <TableCell>Notes</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.units.map((elt, key) => {
                                    return <UnitRow key={`${key}-${elt.name}`} unit={elt} />
                                })}
                            </TableBody>
                        </Table>
                </div>
                
            </div>
        </Card>
    )
}

function UnitRow(props) {
    const unit = props.unit
    return (
        <TableRow>
            <TableCell>
                {unit.name.toUpperCase()}
            </TableCell>
            <TableCell>
                {unit.area_in}
            </TableCell>
            <TableCell>
                {unit.area_out}
            </TableCell>
            <TableCell>
                {unit.rent}
            </TableCell>
            <TableCell>
                {unit.is_available &&
                    <Icon style={{color: 'green'}}>check_circle</Icon>
                }
                {!unit.is_available &&
                    <Icon style={{color: 'darkred'}}>cancel</Icon>
                }
            </TableCell>
            <TableCell>
                {unit.notes}
            </TableCell>
        </TableRow>
    )
}

export default Home