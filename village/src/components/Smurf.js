import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Smurf = props => {  
  return (
    <Card className="Smurf">
    <CardContent>
      <Typography variant="h5" component="h2">
        {props.name}
      </Typography>
      <Typography color="textSecondary">
        {props.name} is {props.height}CM Tall.
      </Typography>
      <Typography color="textSecondary">
        {props.name} is {props.age} Smurf years old.
      </Typography>
    </CardContent>
  </Card>

  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

