import React   from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    width: '12ch',
    marginLeft: "40px",
    marginRight: "40px"
  },
  select: {
    marginLeft: '40px',
    width: '28ch',
  },
  switch: {
    marginLeft: '40px',
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

export function Calculate4() {
  const styles = useStyles();
  const [state, setState] = React.useState({
    seo:false,
    hosting:false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked});
    console.log(event.target.checked);
  };

  return (
    <>{console.log(`State4:`, state)}
      <ThemeProvider theme={theme}>
        <div className="container__3" style={{ paddingBottom: "40px" }}>
          <div className="header">

            <div className="calc2__quest">
              <span>{`SEO`}
                <p>{`Setting up indexing for search\nengines, for each page`}</p>
              </span>
              <Switch className={styles.switch}
                checked={state.seo}
                onChange={handleChange}
                color="primary"
                name="seo"
                inputProps={{ 'aria-label': 'primary checkbox' }} />
            </div>

            <div className="costs">
              <div className="choose__base">
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" >Tilda</Button>
                  <Button variant="contained" style={{ marginLeft: "6px" }} disabled>Code</Button>
                </ThemeProvider>
              </div>
              <div className="total">Total:{`0000`}</div>
              <div className="current">+0000</div>
            </div>
          </div>

          <div className="calc">
            <div className="calc2__quest">
              <span>{`Pull to hosting`}
                <p>{`Buy a domain, hosting and upload\nto the site. Pay per year +30$`}</p>
              </span>
              <Switch className={styles.switch}
                checked={state.hosting}
                onChange={handleChange}
                color="primary"
                name="hosting"
                inputProps={{ 'aria-label': 'primary checkbox' }} />
            </div>

            <div className="calc2__quest">
              <span>Content
              <p>{`Creation of technical\n specifications. Logic,\n materials and text.`}</p>
              </span>
              <FormControl variant="outlined" className={styles.select}>
                <InputLabel htmlFor="outlined-age-native-simple">Content</InputLabel>
                <Select
                  native
                  onChange={handleChange}
                  label="content"
                  inputProps={{
                    name: 'content',
                    id: 'outlined-age-native-simple',
                  }}>
                  <option value={0}>Сustomer provide +0$</option>
                  <option value={25}>We create and planning together +25$</option>
                  <option value={50}>The customer only approves +50$</option>
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

export default Calculate4;