import React from 'react';
import Tilda from '../img/tilda_cart.png';
import Form from '../img/feedback_form.jpg';
import Switch from '@material-ui/core/Switch';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <div className="container__3">
        <div className="header">
          <div className="calc2__quest">
            <span>You are selling a product?</span>
            <ThemeProvider theme={theme}>
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              /></ThemeProvider>
          </div>
          <div className="costs">
            <div className="total">Total:{`0000`}</div>
            <div className="choose__base">Tilda/Code</div>
            <div className="current">+0000</div>
          </div>
        </div>

        <div className="calc">
          <div className="quest1__selector">
            <img alt="" src={Tilda} />
            <div className="card__about">
              <p>{`
              For events, landing pages, information sites
              \n + ease of editing
              \n + focus on design
              \n
              \n - limited functions
              \n - dirty code
              \n - monthly(11$) / yearly(105$) subscription
            `}</p>
            </div>
            <input type="checkbox" className="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1" className="checkbox__label" >Feedback form +30$</label>
          </div>
          <div className="quest1__selector">
            <img alt="" src={Form} />
            <div className="card__about">
              <p>{`
              Best choice for functional websites
              \n + load speed (React)
              \n + focus on efficiency
              \n + clean code
              \n + more options
              \n - need more time
              \n - knowledge to edit
            `}</p>
            </div>
            <input type="checkbox" className="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2" className="checkbox__label" >Shopping cart +60$</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculate2;