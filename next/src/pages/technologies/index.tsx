import styled from "styled-components";

// interface BlobProps {
//     associates: Associate[];
//   }
  
//   export const getStaticProps : GetStaticProps<BlobProps> = async () => {

//     const response = await fetch(`http://localhost:1337/api/associates?populate[profile][populate][profilePicture]=*`, {
//       headers: {
//         Authorization: `Bearer ${bearer}`,
//       },
//     });

//     const associates : AssociatesJson = await response.json();

//     return {
//         props: {
//             associates: associates.data.sort((a, b) => (a.attributes.joined < b.attributes.joined ? -1 : 0)),
//         },
//     };
// };


// const AssociateGrid = styled.ul`

//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;

//  > *{
//   margin: 0.6rem;
//   flex-basis: 45%;
// }
//  > *:first-child{
//   flex-basis: 51%;
// }

// @media screen and (max-width: 510px){

//     display: block;
//     width: max-content;
  
//    > *{
//     display: block;
//   }
// }

// `

//   const Associates = ({ associates: associates }: BlobProps) => {
//     return (
//       <>
//       <h1>Associates</h1>
//       <AssociateGrid  className="associatesGrid">
//         {associates.map((associate, index : number) => (
//           <li key={index} className="link">
//             <Link className="associateShort" href={{ pathname: `/associates/${associate.id}` }} key={associate.id}>
//               <AssociateShort associate={associate}/>
//             </Link>
//           </li>
//         ))}
//       </AssociateGrid>
//         </>
//     );
//   };

//   export default Associates;

import { TechnologiesJson, Technologie, bearer } from "@/types";
import { GetStaticProps } from "next";
import Link from "next/link";

interface TechnologiesProps {
    technologies: Technologie[];
  }
  
  export const getStaticProps : GetStaticProps<TechnologiesProps> = async () => {

    const response = await fetch(`http://localhost:1337/api/technologies`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    const technologies : TechnologiesJson = await response.json();

    return {
        props: {
            technologies: technologies.data,
        },
    };
};

  
  const Technologies = ({ technologies: technologies }: TechnologiesProps) => {
    return (
      <>
      <h1>All technologies</h1>
      <ul>
        {technologies.map((technologie) => (
          <li key={technologie.id} className="link blobShort">
            <Link href={{ pathname: `/technologies/${technologie.id }` }} key={technologie.id}>
            
            <h2>{technologie.attributes.Name}</h2>
            <br/>
            <p className="ph-disp-none" style={{color: "purple"}}>Keep reading</p>
            </Link>

            </li>
        ))}
      </ul>
      </>
    );
  };

  export default Technologies;