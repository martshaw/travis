import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import fetch from 'isomorphic-fetch';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    width: '60vw',
    margin: '5vh auto'
  },
  gridList: {
    margin: '0 auto !important',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  p: {
    width: '100%'
  }
});
class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.custArray = []
        this.state = {
            customers: {}
        };
        this.customers()
        this.markupCustomers = this.markupCustomers
    }
    customers() {
      return fetch('https://api.shore.com/v2/customers', {
          method: 'GET',
          headers: { 'Content-Type': 'application/vnd.api+json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNTdlNjllNS05YzliLTQ4MmMtYTg3NS01NTM0NWVhMjdhZDMiLCJleHAiOjE1Mjg4OTc3NjYsInR5cGUiOiJhIn0.r5ut7929G2RNPPC_uM1F_00B9BIY6iJhPw6A4UBCsX0','Accept': 'application/vnd.api+json' }
        })
  .then(res => res.json())
  .then(res => res.data && res.data.map((dt, i)=> {
    console.log('dt', dt.attributes.given_name)
    return this.setState({
      customers: this.custArray.push(dt)
    })
  }))
  .catch(error => console.error('error', error))
}

markupCustomers(data) {
  console.log("data", data)
  return data.map((data, idx) => (<Card className={this.props.classes.card}><CardContent><Typography gutterBottom variant="headline" component="h2">
  {data.attributes.given_name}</Typography>
  </CardContent></Card>))
}

    render() {
      //const { classes } = this.props;
      console.log('sfdds', this.state.customers)
      const data = [];
      // data.push(this.state.customers)
      console.log('data', this.props)
      return (
        <div className={this.props.classes.container}>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <GridList cellHeight={180} className={this.props.classes.gridList}>
            {this.custArray && this.markupCustomers(this.custArray) }
          <Link to="/page-2/">Go to page 2</Link>
        </GridList>
      </div>
      )
    }
  }
  IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(IndexPage);