import { createGlobalStyle } from 'styled-components';
import BackgroundPicture from '../../assets/images/background/background1.jpg';

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
};
* {
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
}
html {
  height: 100%;
  box-sizing: border-box;
}
body {
    padding        : 0;
    margin         : 4rem 0 0 0 ;
    font-size      : 16px;
    position       : relative;
    min-height     : 100%;
    min-width      : 250px;
    background     : url(${BackgroundPicture}) no-repeat center center fixed;
    background-size:  cover;
};
div {
  display: block;
};
ul {
    list-style: none;
    margin: 0;
    padding: 0;
};
img {
  border-radius: 3px;
};
a {
  text-decoration:none;
}
h1,h2,h3,h4,h5,h6 {
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
  font-family: 'Roboto Slab', serif;
}
`;
