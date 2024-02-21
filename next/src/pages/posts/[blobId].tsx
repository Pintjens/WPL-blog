import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Blob, BlobJson, BlobsJson, bearer } from "@/types";
import BlobArticle from "@/components/blobArticle";


interface Paths extends ParsedUrlQuery {
    blobId: string
  }
  
  export const getStaticPaths : GetStaticPaths<Paths> = async () => {

      const response = await fetch("http://localhost:1337/api/blobs", {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      });

      //they come through in order by id !! 


      const blobs : BlobsJson = await response.json();

      const paths = blobs.data.map((blob : Blob) => ({
        params: { blobId: blob.id.toString() },
    }));

  
      return {
          paths: paths,
          fallback: false,
      };
  };

  interface BlobProps {
    blob: Blob;
  }
  
  export const getStaticProps : GetStaticProps<BlobProps, Paths> = async (context) => {
  
    const response = await fetch(`http://localhost:1337/api/blobs/${context.params?.blobId}?populate`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });
  
    const blob : BlobJson = await response.json();
  
    return {
        props: {
            blob: blob.data
        },
    };
  };

  const BlobPost = ({ blob: blob }: BlobProps) => {
    return (
            <BlobArticle blob={blob}/>
    );
};

export default BlobPost