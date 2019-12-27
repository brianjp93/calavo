import React from 'react'
import {
    Card,
    Container,
    Table, TableRow, TableHead, TableBody, TableCell, TableContainer, Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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
                </div>
                <img
                    src="/static/img/carousel_1.jpg"
                    alt="building from calavo street"
                    style={{width: '100%', marginBottom: 20, borderRadius: 4}}
                    />
                <UnitTable name={'106 Calavo Street'} units={units.calavo106} />
            </Container>

        </div>
    )
}

function UnitTable(props) {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
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
                {unit.is_available}
            </TableCell>
            <TableCell>
                {unit.notes}
            </TableCell>
        </TableRow>
    )
}

export default Home