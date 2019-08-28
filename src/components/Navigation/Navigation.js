import React from 'react'
import styled from '@emotion/styled'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
/* globals tw */

const Navigation = () => {
  const brandSrc = useStaticQuery(graphql`
    {
      file(name: {eq: "navbrandlogo"}) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <StyledNavigation>
      <NavigationContainer>
        <Link to="/">
        <NavigationBrandImage fluid={brandSrc.file.childImageSharp.fluid} alt="" />
        </Link>
        <NavigationItems>
          <NavigationItem to="/about">About</NavigationItem>
        </NavigationItems>
      </NavigationContainer>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`${tw`bg-blue shadow w-full`}`
const NavigationContainer = styled.div`${tw`mx-auto flex flex-row justify-between px-2 md:px-12 max-w-xl`}`
const NavigationItems = styled.div`${tw`flex flex-row`}`
const NavigationItem = styled(Link)`${tw`text-white font-sans px-4 py-2 flex items-center no-underline`}`
const NavigationBrandImage = styled(Image)`${tw`w-12 m-4`}`

export default Navigation