import React from "react";
import "./layout.css";
import tw from 'tailwind.macro'

import { Seo } from '../../../../components/Seo'
import { Navigation } from "../../../../components/Navigation";

export default ({ children, Header, ...props }) => (
  <div>
    <Seo />
    <Navigation />
    {Header && <Header {...props} />}
    <StyledLayout>{children}</StyledLayout>
  </div>
);

const StyledLayout = tw.div`mx-auto px-2 md:px-12 max-w-5xl`