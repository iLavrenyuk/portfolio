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
                <p className="result__small">{`+подписка по\n желанию 130$`}</p>
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
                <Button variant="contained" color="primary" width="" style={{ marginTop: "6px" }} >SEND</Button>
              </div>
              {/* </Form> */}
            </div>
            <div className="calc__column">
              <div className="about__me">
                <span className="result__content isntruments">Обо мне</span>
                <p className="result__small white">
                  {`Меня зовут Илья Лавренюк, мне 23 года.
              Имею успешный опыт продаж и бизнеса (3 года).  
              Стараюсь быть лучшим в свем деле.
              Дисциплинированный, постоянно обучаюсь.
              Имею высшее образование.
              Опыт разрботки сайтов - больше года.`}</p>
              </div>
              <div className="about__front">
                <span className="result__content">С заботой о вашем бюджете</span>
                <p className="result__small">{`Напишите, и мы обсудим наиболее выгодный и нужный вариант под вашы задачи.
            \nТак же можно обсудить более расширенный функционал.`}</p>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}