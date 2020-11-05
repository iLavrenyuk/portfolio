import React from 'react';
import { useData } from '../data/DataContext';
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

  const { data, setValues } = useData();

  const handleChecked = (event) => {
    setValues({
      [event.target.name]: event.target.checked,
    });

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
    return (data.feedback ? 30 : 0) + (data.cart ? 60 : 0)
  }

  return (
    <>
      <div className="container__3">
        <ThemeProvider theme={theme}>
          <div className="header">
            <div className="calc2__quest">

              <span>{`You are selling a product?`}</span>
              <Switch
                checked={!!data.product}
                onChange={handleChecked}
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
              <div className="total">Total: {total()}$</div>
              <div className="current">+{calculate() ? calculate() : "00"}$</div>
            </div>
          </div>
        </ThemeProvider>
        <div className="calc calc__img">
          <div className="quest1__selector">
            <img alt="" src={Form} />
            <div className="card__about">
              <p>{`For events, landing pages, information sites.
                + ease of editing
                + focus on design
                - limited functions
                - dirty code
                - monthly(11$) / yearly(105$) subscription`}</p>
            </div>
            <input
              checked={!!data.feedback}
              onChange={handleChecked}
              type="checkbox"
              name="feedback"
              className="checkbox"
              id="feedback" />
            <label htmlFor="feedback" className="checkbox__label quest2" >Feedback form +30$</label>
          </div>
          <div className="quest1__selector">
            <img alt="" src={Tilda} />
            <div className="card__about">
              <p>{`Best choice for functional websites.
                + load speed (React)
                + focus on efficiency
                + clean code
                + more options
                - need more time
                - knowledge to edit`}</p>
            </div>
            <input
              checked={!!data.cart}
              onChange={handleChecked}
              type="checkbox"
              name="cart"
              className="checkbox"
              id="cart" />
            <label htmlFor="cart" className="checkbox__label quest2" >Shopping cart +60$</label>
          </div>
        </div>
      </div>

    </>
  );
}

export default Calculate2;