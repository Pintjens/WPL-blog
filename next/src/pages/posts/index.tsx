import { BlobsJson, Blob, bearer } from "@/types";
import { GetStaticProps } from "next";
import Link from "next/link";

interface BlobProps {
    blobs: Blob[];
  }
  
  export const getStaticProps : GetStaticProps<BlobProps> = async () => {

    const response = await fetch(`http://localhost:1337/api/blobs`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    const blobs : BlobsJson = await response.json();

    return {
        props: {
            blobs: blobs.data,
        },
    };
};

  
  const Blobs = ({ blobs: blobs }: BlobProps) => {
    return (
      <>
      <h1>All Blogposts</h1>
      <ul>
        {blobs.map((blob) => (
          <li key={blob.id} className="link blobShort">
            <Link href={{ pathname: `/posts/${blob.id }` }} key={blob.id}>
            
            <h2>{blob.attributes.title}</h2>
            <br/>
            <p className="ph-disp-none" >{blob.attributes.message.substring(0,210)}...</p>
            <p className="ph-disp-none" style={{color: "purple"}}>Keep reading</p>
            </Link>

            </li>
        ))}
      </ul>
      </>
    );
  };

  export default Blobs;