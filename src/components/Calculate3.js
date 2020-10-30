import React from 'react';
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
    width: '12ch',
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
  const [state, setState] = React.useState('55');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <><ThemeProvider theme={theme}>
      <div className="container__3" style={{ paddingBottom: "40px" }}>
        <div className="header">

          <div className="calc2__quest">
            <span>{`How many pages?`}
              <p>{`Page price + 25$\n Apart from the first page`}</p>
            </span>
            <TextField className={styles.root}
              id="outlined-number"
              label="Count"
              type="number"
              variant="outlined" />
          </div>

          <div className="costs">
            <div className="choose__base">
              <Button variant="contained" color="primary" >Tilda</Button>
              <Button variant="contained" style={{ marginLeft: "6px" }} disabled>Code</Button>
            </div>
            <div className="total">Total:{`0000`}</div>
            <div className="current">+0000</div>
          </div>
        </div>

        <div className="calc">
          <div className="calc2__quest">
            <span>{`How many pages\nare there in total?`}
              <p>{`How many of them have the same\nstructure? For example products...`}</p>
            </span>
            <TextField className={styles.root}
              id="outlined-number"
              label="Count"
              type="number"
              variant="outlined" />
          </div>

          <div className="calc2__quest calc__column">
            <span>Design
            </span>
            <FormControl variant="outlined" className={styles.select}>
              <InputLabel htmlFor="outlined-age-native-simple">Design</InputLabel>
              <Select
                native
                value={state.design}
                onChange={handleChange}
                label="design"
                inputProps={{
                  name: 'Design',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={0}>There is a ready-made +0$</option>
                <option value={25}>Copy from another site +25$</option>
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