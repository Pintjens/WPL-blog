import Link from "next/link";
import { ReactElement } from "react";
import { Inter } from 'next/font/google'
import styled from "styled-components"
//import { SiteImage, SiteImageJson, bearer } from "@/types";
//import { GetStaticProps } from "next";



const inter = Inter({ subsets: ['latin'] })

// interface LayoutProps{
//     siteImage : SiteImage[];
// }

// export const getStaticProps : GetStaticProps<LayoutProps> = async () => {

//     const response = await fetch(`http://localhost:1337/api/site-images?populate[image][fields]=url`, {
//         headers: {
//           Authorization: `Bearer ${bearer}`,
//         },
//         cache: 'force-cache'
//       });
    
//       const siteImageJson : SiteImageJson = await response.json();
//       const siteImage : SiteImage[] = siteImageJson.data;
  
//     return {
//         props: {
//             siteImage : siteImage
//         },
//     };
//   };



const Header = styled.header`

top: 0;
min-width: 100%;
display: flex;
justify-content: center;
backdrop-filter: blur(222px);
z-index: 12;

@media screen and (max-width: 564px){
    display: flex;
}
`;
const Nav = styled.nav`

padding: 0rem;
align-content: space-around;
display: flex;

${"*{"/*I was sceptic about the usefulness of these styled-components thingies, but from this line on.. I must say: I actually like them =)*/}
}
 *{
    margin-bottom: 3;
    font-size: x-large;
    font-weight: 600;
    border: 6px;
    border-radius: 0.6rem;
    padding: 0.99rem;
}

${" nav *:hover {" /*Sadly: I had to change my mind again.
this is causing some very unfortunate behavior where, it applies the css as I want it to, but when I reload the page, it all goes tits up =( 
    + why do I need too specify nav again here?
*/}
    background-color: inherit;
  }

@media screen and (max-width: 564px){
    width: 100%;
    display: flex;
    justify-content: space-around;

 * {
  font-size: medium; 
  padding: 0.51rem;
  border-radius: 0.3rem;
  
}


`;
const Main = styled.main`
margin-top: 5.1rem;
display: flex;
flex: 6;
flex-direction: column;
align-items: center;
justify-self: stretch;
align-self: stretch;
min-height: 100vh;
background: scroll;
*{
    max-width: 90ch;
};

@media screen and (max-width: 999px){
    margin: 5.1rem 2.1rem;
};

@media screen and (max-width: 564px){
    margin: 3rem 0.9rem;
};

`;
const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: inherit;
`;

// This should be plenty of styled-components experience I suppose

const Layout = ({ children } : {children: ReactElement}/*, {siteImage : siteImage}: LayoutProps*/) => {

    return (
        <>
            <Header style={{position:"fixed"}}  className="w-full bg-gradient-to-b from-zinc-200" >

                <Nav aria-label="primary navigation">
                    <Link href={"/"}  className="hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Home</Link>
                    <Link href={"/posts"} className="hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" >Blobs</Link>
                    <Link href={"/tags"} className="hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" >Tags</Link>
                    <Link href={"/technologies"} className="hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" >Technologies</Link>
                </Nav>

            </Header>


            <Main>
                {children}
            </Main>


            <Footer  className="w-full dark:border-neutral-900 lg:border lg:dark:bg-zinc-600/30" >
                
                <div>
                    Last Site Update: <div className="unix"></div>
                    {process.env.lastDeployment}
                    </div>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <p className="see-me-if-you-didnt" style={{position: "absolute", right: "2.4rem"}}>To Slow =P</p>
                    <Nav aria-label="shadow navigation">
                        <Link href={"/406"} style={{fontSize:"small", margin:3}}  className="catch-me-if-you-can">Crimes Against Humanity</Link>
                    </Nav>
                </div>
            </Footer>
        </>
    );
  }
  
  export default Layout;