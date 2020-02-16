import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Hey piacere di conoscerti io sono <Styled.a href="http://example.com/">Alessandro</Styled.a>
    {` `}
    uno sviluppatore e studente che la sera si trasforma in un blogger.
    <br />
    In questo blog pubblico articoli inerenti a tutta l'informatica in generale! Come la programmazione, i circuiti, matematica e tanto altro.
    <br />
    Che aspetti? Comincia subito a guardare qualche articolo!  
  </Fragment>
)
