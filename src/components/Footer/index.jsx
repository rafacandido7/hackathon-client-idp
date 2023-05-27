import './styles.css';
import { Typography, Grid, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f2d45', padding: '20px' }}>
      <Grid container direction='column' alignItems='center' justifyContent='center'>
        <Grid className='centered'>
          <img
            src='https://www.idp.edu.br/wp-content/themes/idp_principal_2020/img/id-idp.png'
            alt='Logo da Empresa'
            style={{ height: '80px' }}
          />

        </Grid>
        <Grid style={{textAlign: 'center'}}>
            <Typography variant='subtitle' style={{ color: '#fff', fontSize: '14px' }}>
            SGAN Quadra 609 - Módulo A <br />
          </Typography>
          <Typography variant='subtitle' style={{ color: '#fff', fontSize: '14px' }}>
            Via L2 Norte
            Brasília - DF
          </Typography>
        </Grid>
          <Grid className='icons-field'>
            <Link href='https://goo.gl/maps/o5bZcqP5FRGTzjWx5?coh=178571&entry=tt' color='#fff' underline='none'>
              <LocationOnIcon className='icons'/>
            </Link>
            <br />
            <Link href='tel:+556135356565' color='#fff' underline='none'>
              <PhoneIcon className='icons'/>
            </Link>
            <br />
            <Link href='https://www.instagram.com/sejaidp/' color='#fff' underline='none'>
              <InstagramIcon className='icons'/>
            </Link>
            <br />
            <Link href='https://www.youtube.com/user/idponline' color='#fff' underline='none'>
              <YouTubeIcon className='icons'/>
            </Link>
          </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

