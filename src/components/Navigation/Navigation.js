import React from 'react'
import styled from '@emotion/styled'
import {Global, css} from '@emotion/core'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'
import tw from 'tailwind.macro'

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
      <Global
        styles={css`
          body{
            padding-top: 5rem;
          }
        `}
      />
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

const StyledNavigation = styled.nav`
  ${tw`bg-white shadow w-full`}
  position: fixed;
  top: 0;
  z-index: 2;
`
const NavigationContainer = styled.div`${tw`mx-auto flex flex-row justify-between px-2 md:px-12 max-w-5xl`}`
const NavigationItems = styled.div`${tw`flex flex-row font-bold`}`
const NavigationItem = styled(Link)`${tw`text-blue-500 font-sans px-4 py-2 flex items-center no-underline`}`
const NavigationBrandImage = styled(Image)`${tw`w-12 m-4`}`

export default Navigation