/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import { Header, Footer } from "components/layout";

const getStyles = (hasFooter: boolean) => ({
  content: {
    marginTop: 50, // header height
    padding: `${hasFooter ? 0 : "30px 15px"}` // grid padding
  }
});

const withLayout = <P extends {}>(
  Component: React.ComponentType<P>,
  hasFooter = false
): React.FC<P> => props => {
  const { content } = getStyles(hasFooter);

  return (
    <>
      <Header />
      <section id="content" style={{ ...content }}>
        <Component {...(props as P)} />
      </section>
      {hasFooter && <Footer />}
    </>
  );
};

export default withLayout;
