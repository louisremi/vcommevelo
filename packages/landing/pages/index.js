import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { veloTheme } from 'common/src/theme/velo';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Velo/Navbar';
import Banner from '../containers/Velo/Banner';
import Feature from '../containers/Velo/Feature';
import AboutUs from '../containers/Velo/AboutUs';
import Project from '../containers/Velo/Project';
import Team from '../containers/Velo/Team';
import News from '../containers/Velo/News';
import Testimonial from '../containers/Velo/Testimonial';
import Gallery from '../containers/Velo/Gallery';
import Footer from '../containers/Velo/Footer';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  VeloWrapper,
  ContentWrapper,
} from '../containers/Velo/velo.style';

export default () => {
  return (
    <ThemeProvider theme={veloTheme}>
      <Fragment>
        <Head>
          <title>V comme Vélo | Achat, Vente et entretien vélo, à domicile ou à notre atelier Lyon Part-Dieu</title>
          <meta name="theme-color" content="#00A8C6" />
          <meta name="description" content="V comme vélo propose de bons vélos d'occasion, vintage ou récent, entièrement révisés par nos soins. Nous pouvons aussi nous déplacer chez vous pour entretenir ou racheter votre vélo." />
          <meta
            name="keywords"
            content="Vélo, bicyclette, réparation, atelier, vélociste"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <VeloWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Feature />
            <AboutUs />
            <Project />
            <Team />
            <News />
            <Testimonial />
            <Gallery />
          </ContentWrapper>
          <Footer />
        </VeloWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
