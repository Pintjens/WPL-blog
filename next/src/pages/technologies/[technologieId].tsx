import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Blob, BlobJson, TechnologiesJson, Technologie, bearer, TechnologieJson } from "@/types";
import BlobArticle from "@/components/blobArticle";


interface Paths extends ParsedUrlQuery {
    technologieId: string
  }
  
  export const getStaticPaths : GetStaticPaths<Paths> = async () => {

      const response = await fetch("http://localhost:1337/api/technologies", {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      });

      const technologies : TechnologiesJson = await response.json();

      const paths = technologies.data.map((technologie : Technologie) => ({
        params: { technologieId: technologie.id.toString() },
    }));

  
      return {
          paths: paths,
          fallback: false,
      };
  };

  interface TechnologieProps {
    technologie: Technologie;
  }
  
  export const getStaticProps : GetStaticProps<TechnologieProps, Paths> = async (context) => {
  
    const response = await fetch(`http://localhost:1337/api/technologies/${context.params?.technologieId}?populate`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });
  
    const technologie : TechnologieJson = await response.json();
  
    return {
        props: {
            technologie: technologie.data
        },
    };
  };

  const TechnologieBlogPosts = ({ technologie: technologie }: TechnologieProps) => {
    return (
      <div style={{width:"max-content"}}>

        <h2>{technologie.attributes.Name}</h2>
        <br/>
        <p>{technologie.attributes.Description}</p>

        <a href={technologie.attributes.Url}>Link</a>

      </div>

    );
};

export default TechnologieBlogPosts;