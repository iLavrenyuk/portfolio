import React from 'react';
import { useData } from '../data/DataContext';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
  root: {
    minWidth: '6.5ch',
    width: '8ch',
    marginLeft: "40px",
    marginRight: "40px"
  },
  select: {
    width: '28ch',
  }
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

export function Calculate3() {
  const styles = useStyles();
  const { data, setValues } = useData();

  const handleValue = (event) => {
    setValues({ [event.target.name]: event.target.value });
  };

  const total = () => {
    return (
      (data.siteBase === "code" ? 100 : 50) +
      (data.feedback ? 30 : 0) + (data.cart ? 60 : 0) +
      (data.allPages > 0 ? data.allPages - 1 : 0) * 25 +
      ((data.allPages ? data.allPages : 1) -
        (data.discount <= data.allPages && data.discount > 0 ? data.discount - 1 : 0)) *
      (data.design ? data.design : 0) +
      (data.chatbot ? 120 : 0) +
      (data.hosting ? 30 : 0) +
      ((data.content ? data.content : 0) * (data.allPages ? data.allPages : 1))
    )
  }

  const calculate = () => {
    return (
      (data.allPages > 0 ? data.allPages - 1 : 0) * 25
      + ((data.allPages ? data.allPages : 1) -
        (data.discount <= data.allPages && data.discount > 0 ? data.discount - 1 : 0))
      * (data.design ? data.design : 0)
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="container__3" style={{ paddingBottom: "40px" }}>
          <div className="header">

            <div className="calc2__quest">
              <span>{`How many pages?`}
                <p>{`Page price + 25$\n First page is free!
                One page - less than 10 blocks`}</p>
              </span>
              <TextField
                value={data.allPages ? data.allPages : false}
                name="allPages"
                className={styles.root}
                onChange={handleValue}
                id="outlined-number"
                label="All"
                type="number"
                variant="outlined" />
            </div>

            <div className="costs">
              <div className="choose__base">
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" >Tilda</Button>
                  <Button variant="contained" style={{ marginLeft: "6px" }} disabled>Code</Button>
                </ThemeProvider>
              </div>
              <div className="total">Total: {total()}$</div>
              <div className="current">+{calculate() ? calculate() : "00"}$</div>
            </div>
          </div>

          <div className="calc">
            <div className="calc2__quest">
              <span>{`How many pages have the same structure?`}
                <p>{`For example many products. Discount starting from the second page.`}</p>
              </span>
              <TextField
                value={data.discount ? data.discount : false}
                name="discount"
                onChange={handleValue}
                className={styles.root}
                error={data.discount > data.allPages}
                id="outlined-number"
                label="Dis."
                type="number"
                variant="outlined" />
            </div>

            <div className="calc2__quest calc__column">
              <span>Design</span>
              <FormControl variant="outlined" className={styles.select}>
                <InputLabel htmlFor="design">Layout:</InputLabel>
                <Select
                  native
                  value={data.design}
                  onChange={handleValue}
                  label="design"
                  inputProps={{
                    name: 'design',
                    id: 'design',
                  }}>
                  <option value={0}>Created already +0$</option>
                  <option value={25}>From another site +25$</option>
                  <option value={55}>Order prof. design +55$</option>
                </Select>
                <FormHelperText>Price add per page</FormHelperText>
              </FormControl>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Calculate3;