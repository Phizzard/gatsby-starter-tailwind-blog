import React from "react";
import styled from "@emotion/styled";
import "./layout.css";
/* globals tw */

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

const StyledLayout = styled.div`
  ${tw`mx-auto px-2 md:px-12 max-w-xl`}
`;
