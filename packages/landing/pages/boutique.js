import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { veloTheme } from 'common/src/theme/velo';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Heading from 'common/src/components/Heading';
import Navbar from '../containers/Velo/Navbar';
import Products from '../containers/Boutique/Products'
import Footer from '../containers/Velo/Footer';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  VeloWrapper,
  ContentWrapper,
} from '../containers/Velo/velo.style';

import {
  ProductsWrapper,
  FiltersWrapper,
  Container
} from '../containers/Boutique/boutique.style';

export default () => {
  return (
    <ThemeProvider theme={veloTheme}>
      <Fragment>
        <Head>
          <title>V comme Vélo | Boutique de vélos à Lyon</title>
          <meta name="theme-color" content="#00A8C6" />
          <meta name="description" content="Vélos d'occasion vintages ou récents, révisés par nos soins, prêts à rouler." />
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
            <Container>
              <FiltersWrapper>
                <Heading as="h1" content="La Boutique">
                </Heading>
              </FiltersWrapper>
              <ProductsWrapper>
                <Products/>
              </ProductsWrapper>
            </Container>
          </ContentWrapper>
          <Footer />
        </VeloWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
