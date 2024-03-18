import { Main3D } from "~/features/main-3d/ui";
import React from "react";
import Header from "../common/Header";
import Nav from "../common/Nav";
import { getConnection, tryActivateConnector } from "~/lib/connectors/connections";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  
  return (
    <>
      <Header />
      <Nav />
      <Main3D>{children}</Main3D>
    </>
  );
};

export default MainLayout;
