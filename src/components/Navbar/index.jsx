import { useState } from "react"
import './styles.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Cardápio", "Sobre Nós", "Avaliações"];

function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Box className='header' >
			<CssBaseline />
			<AppBar component="nav">
				<Toolbar sx={{ backgroundColor: '#FBEAEB' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						<img
							src="https://www.idp.edu.br/wp-content/themes/idp_principal_2020/img/id-idp-azul-escuro.png"
							alt="Logo IDP Branca"
							style={{width: 60}}
						/>
					</Typography>
					<Box sx={{
            display: 'flex',
            alignItems: 'center',
         }}>
						<Typography variant="h6" component="div">
							<Link to="/">Cardápio</Link>
						</Typography>
						<Typography variant="h6" component="div">
							<Link to="/aboutus">Sobre Nós</Link>
						</Typography>
						<Typography variant="h6" component="div">
							<Link to="/reviews">Avaliações</Link>
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav" >
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
			</Box>
		</Box>
	);
}

export default Navbar;
