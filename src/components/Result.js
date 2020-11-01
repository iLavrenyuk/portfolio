import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '35ch',
    marginTop: "20px",
    marginRight: "40px"
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#D9CCC6',
      main: '#805240',
      dark: '#59392d',
      contrastText: '#ffffff',
    }
  },
});

export default function Result() {
  const styles = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container__3">
          <div className="calc4__total">
            <div className="calc2__quest result">RESULT</div>
            <div className="calc result__content">
              <div className="">Tilda:
            <span>{`200$`}</span>
                <p className="result__small">{`+subscription 130$`}</p>
              </div>
              <div>Code:<span>{`300$`}</span></div>
            </div>
          </div>
          <div className="spc-evn">

            <div className="name__phone">
              {/* <Form onSubmit={handlSubmit(onsubmit)}> */}
              <div>
                <div className="result__content">For communication</div>

                <TextField
                  className={styles.root}
                  required
                  id="outlined-required"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  className={styles.root}
                  required
                  id="outlined-required"
                  label="Phone"
                  variant="outlined"
                />
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" width="" style={{ marginTop: "6px" }} >SEND</Button>
                </ThemeProvider>
              </div>
              {/* </Form> */}
            </div>
            <div className="calc__column">
              <div className="about__me">
                <span className="result__content isntruments">About me</span>
                <p className="result__small white">
                  {`My name is Ilya Lavrenyuk, I'm 23 years old.
                  I have successful experience in sales and business (3 years).
                  I try to be the best in my business.
                  Disciplined, I am constantly learning.
                  I have a higher education.
                  Experience in website development - over a year.`}</p>
              </div>
              <div className="about__front">
                <span className="result__content">Taking care of your budget</span>
                <p className="result__small">{`Write, and we will discuss the most profitable and necessary option for your tasks.
            \nMore advanced features can also be discussed.`}</p>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}