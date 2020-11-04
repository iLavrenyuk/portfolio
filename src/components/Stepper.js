import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#D9CCC6',
      main: '#805240',
      dark: '#59392d',
      contrastText: '#fff',
    }
  },
});

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #a53b0a 20%, #805240 100%)',
    fontSize: "24px",
    color: 'white',
    boxShadow: '0 3px 5px 2px  rgba(212, 73, 8, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {

  },
  backButton: {
    marginRight: theme.spacing(1),
    fontSize: "20px",
  },
  instructions: {
    marginBottom: theme.spacing(1),
    color: "#805240",
    textAlign: "center",
  },
}));

function getSteps() {
  return ['Choose the basis', 'Product. Form', 'Count pages. Design', 'Content. Storage'];
}
const route = ['/', '/calculate2', '/calculate3', '/calculate4', 'result'];

export default function HorizontalStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {

    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const backLinc = (link) => {
    return route[link ? link - 1 : link];
  }
  const nextLinc = (link) => {
    return route[link + 1];
  }

  return (
    <div className="container__router step">
      <div ><ThemeProvider theme={theme}>
        <Stepper classes={{ root: "MuiStepIcon-active" }} activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel >{label}</StepLabel>
            </Step>
          ))}
        </Stepper></ThemeProvider>
      </div>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        {activeStep === steps.length ? (
          <div>
            <Button className={classes.backButton} variant="contained" onClick={handleReset}>
              <Link to={`/`}>Repeat</Link>
            </Button>
          </div>
        ) : (
            <div>
              <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}>
                <Link to={backLinc(activeStep)}>
                  BACK
                    </Link>
              </Button>
              <StyledButton variant="contained" onClick={handleNext}>
                <Link to={nextLinc(activeStep)}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'NEXT'}
                </Link>
              </StyledButton>
            </div>
          )}
      </div>
    </div >
  );
}
