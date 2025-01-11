import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  CssBaseline,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Divider,
  ListItemIcon,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';



const SideNav = (props) => {
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
         <Typography>
            
Skip to content
News & Stories
Ukraine war pictures
Defenders of Freedom
Russia’s war crimes
Food Security
For Media
Search for:

en
it
ar
zh
ru
de
fr
es
Sections

Support Ukraine
Donate to Ukraine
Arm Ukraine
This is the official website of Ukraine
To Main Page
SupportUkraine
You can save lives, no matter where in the world you are.

A simple donation. A few clicks on your keyboard. A message to the right person.

Everything you need to help Ukrainians in their fight for peace and freedom – in one place.

All
Donate
Humanitarian aid
Host Ukrainian refugees
Become a medical volunteer
Cover the news and write about Ukraine
Read & share only verified news
Join the Foreign Legion
Donate

Donate to Ukraine’s defenders

Donate to Ukraine’s defenders. They’re fighting for peace not only in Ukraine, but in all of Europe. Stand on the side of justice and freedom.


Note: you can find out the exchange rate for the Ukrainian Hryvnia (UAH) in the Google or Wise converters, simply choose your currency in the relevant field.


Go to the donation page


Humanitarian aid

Support real people suffering from the war: families, children, refugees, medics.


Official state hotline numbers for providing humanitarian aid:
Calls from abroad or Ukraine: +380 44 237 00 02


Humanitarian aid account of the Ministry of Social Policy of Ukraine
(food, shelter, medicine, clothes and other help for refugees):


Find the bank transfer details for your appropriate currency here.


UNICEF Fund for supporting Ukrainian children:
Find the official details here.


Ministry of Health + Red Cross fund for assisting doctors:
Scroll down after the press statement, for the bank transfer details in the currency of your choice – here.


Ministry of Health Crypto Wallets for assisting doctors:
Find the official details here.


Host Ukrainian refugees
Families, children, and refugees are seeking safe places of shelter around the world. You can save lives by providing a place to stay.

Find groups and global services that can help host refugees in your area/country (NGOs, local communities, etc).
If none exist in your area and you feel you can help – create your own Facebook groups and/or local initiatives!
Reach out to local authorities and inquire about organizing official refugee programs.
Contact your Ukranian friends and find out if they are heading to the borders and need help.
Become a medical volunteer
Every day more and more families and children need medical assistance due to Russian aggression. Soldiers need emergency medical aid. Ukrainian medics sorely need assistance both on the front lines and in the rear.

If you have medical experience – you can save lives!

Fill out the form here.

Full details from the Ministry of Health here.

Cover the news and write about Ukraine
If you are a journalist, you can help Ukraine by spreading the truth and providing media coverage. Help secure peace and save lives!

Contact for media requests/questions:

Oleg Nikolenko, Spokesperson of the Ministry of Foreign Affairs of Ukraine, press@mfa.gov.uа

Here you can find a media kit with the official message box from the Ministry of Foreign Affairs of Ukraine (updated daily).

Read & share only verified news
Russia is conducting a propaganda & information war, reinforcing their bloody aggression with lies and fakes.

Please support the truth by trusting only official news sources.

You can find a list of verified sources here.

Join the Foreign Legion
If you have the experience and the motivation, you can help protect Ukraine directly by joining the Foreign Legion of Territorial Defense of Ukraine. The best way to do so is via your nearest Ukrainian Embassy or Consulate.

Protect freedom & peace in our fight against Russian aggression!

APPLY HERE
Share
Meet Ukrainian defenders of freedom

Heroes
Ukrainian paramedic Iryna Tsybukh was killed at the frontline in the Kharkiv region 
Read More

Heroes
Ukrainian defender Anastasiia plans to return to the front with a prosthetic leg
Read More

Support
Ukrainian volunteer Natalia Yaroshenko has been helping the Ukrainian military for 10 years
Read More

Heroes
Ukrainian poet Maksym Kryvtsov was killed in action on January 7
Read More

Heroes
Military driver Valentyn undergoes rehabilitation after losing his lower limbs on the battlefield
Read More

Heroes
Yevhen, a Ukrainian defender with a prosthetic leg, climbed Mount Hoverla to fundraise for the military
Read More
All Stories
Donate to the brave
Donate
Administered by BRAND UKRAINE NGO in cooperation with MFA Ukraine.
EUUKAIDUSAID
This website is co-funded by the European Union, UK aid from the UK Government and the United States Agency for International Development (USAID). Its contents are the sole responsibility of BRAND UKRAINE organization and do not necessarily reflect the views of the European Union, USAID or the UK government.
developed by plusone social impact
Follow us
ukraine.ua.mfa@gmail.com

Cookie Policy
Ukraine before the war
This website uses cookies. A cookie is stored on your device to give you a better experience of the website. If you want more information, read about how we use cookies.
Ok

         </Typography>
      </Box>
    </Box>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default SideNav;
