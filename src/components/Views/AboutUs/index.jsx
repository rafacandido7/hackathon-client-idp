import { Grid, Typography, Paper} from "@mui/material";
import "./styles.css";

function AboutUs() {
  return (
    <div>
      <div className="box">
        <Grid container className="content">
          <Typography variant="h4" className="header_nossa_missao">
            Nossa missão
          </Typography>
          <Paper elevation={5} className="paragrafo_nossamissao">
            Na nossa empresa, acreditamos que o cheiro de comida boa é o convite
            perfeito para uma experiência gastronômica inesquecível. Cada um de
            nossos produtos é cuidadosamente preparado para despertar os
            sentidos e encantar o paladar. Queremos que você sinta o aroma
            irresistível e reconfortante que envolve nossas criações,
            proporcionando uma experiência única e deliciosa a cada refeição.{" "}
          </Paper>
        </Grid>
      </div>
    </div>
  );
}

export default AboutUs;
