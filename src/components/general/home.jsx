import React from 'react'
import {
    Card,
    Container,
    Table, TableRow, TableHead, TableBody, TableCell
} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import useStyles from '../../mystyle'
import numeral from 'numeral'

import units from '../../data/units'

function Home(){
    const unit_names = ['calavo106', 'calavo108', 'calavo110', 'calavo120']

    const all_units = []
    for (let unit_name of unit_names) {
        all_units.push(...units[unit_name])
    }
    const avail = all_units.filter(x => x.is_available).length
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
                                rel="noopener noreferrer"
                                href="https://www.google.com/maps/place/110+S+Calavo+St,+Santa+Paula,+CA+93060/@34.3399911,-119.0894452,17.42z/data=!4m5!3m4!1s0x80e9b50124bf64c5:0x90bad8b3f389389e!8m2!3d34.3400851!4d-119.0877226">
                                110 S Calavo St, Santa Paula, CA 93060
                            </a>
                        </span>
                    </div>

                    <div style={{fontStyle: 'italic', paddingTop: 5}}>
                        There are currently {avail} available units.
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

    const avail = units.filter(x => x.is_available).length
    const chip_color = avail ? 'lightgreen': 'lightgrey'
    return (
        <Card
            className={classes.card}
            style={{marginTop:20, overflowX: 'scroll'}}>
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

function fmoney(n) {
    if (n) {
        return numeral(n).format('0,0.00')
    }
    return '-'
}

function fnum(n) {
    if (n) {
        return numeral(n).format('0,0')
    }
    return '-'
}

function UnitRow(props) {
    const unit = props.unit
    return (
        <TableRow>
            <TableCell>
                {unit.name.toUpperCase()}
            </TableCell>
            <TableCell>
                {fnum(unit.area_in)}
            </TableCell>
            <TableCell>
                {fnum(unit.area_out)}
            </TableCell>
            <TableCell>
                {fmoney(unit.rent)}
            </TableCell>
            <TableCell>
                {unit.is_available &&
                    <Icon style={{color: 'green'}}>check_circle</Icon>
                }
                {!unit.is_available &&
                    <Icon style={{color: 'grey'}}>cancel</Icon>
                }
            </TableCell>
            <TableCell>
                {unit.notes}
            </TableCell>
        </TableRow>
    )
}

export default Home
