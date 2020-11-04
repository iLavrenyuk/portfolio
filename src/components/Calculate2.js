import React from 'react';
import Tilda from '../img/tilda_cart.png';
import Form from '../img/feedback_form.jpg';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

export function Calculate2() {

  const [state, setState] = React.useState({
    product: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <div className="container__3">
        <ThemeProvider theme={theme}>
          <div className="header">
            <div className="calc2__quest">

              <span>{`You are selling a product?`}</span>
              <Switch
                checked={state.product}
                onChange={handleChange}
                color="primary"
                name="product"
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
        </ThemeProvider>
        <div className="calc calc__img">
          <div className="quest1__selector">
            <img alt="" src={Tilda} />
            <div className="card__about">
              <p>{`For events, landing pages, information sites.
                + ease of editing
                + focus on design
                
                - limited functions
                - dirty code
                - monthly(11$) / yearly(105$) subscription`}</p>
            </div>
            <input type="checkbox" className="checkbox" id="checkbox__Feedback" name="checkbox__Feedback" />
            <label htmlFor="checkbox__Feedback" className="checkbox__label quest2" >Feedback form +30$</label>
          </div>
          <div className="quest1__selector">
            <img alt="" src={Form} />
            <div className="card__about">
              <p>{`Best choice for functional websites.
                + load speed (React)
                + focus on efficiency
                + clean code
                + more options
                - need more time
                - knowledge to edit`}</p>
            </div>
            <input type="checkbox" className="checkbox" id="checkbox__cart" name="checkbox__cart" />
            <label htmlFor="checkbox__cart" className="checkbox__label quest2" >Shopping cart +60$</label>
          </div>
        </div>
      </div>

    </>
  );
}

export default Calculate2;