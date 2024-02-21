import { Inter } from 'next/font/google'
import { GetStaticProps } from 'next';
import { BlobsJson, Blob, bearer } from '@/types';
import BlobArticle from '@/components/blobArticle';

const inter = Inter({ subsets: ['latin'] })


interface BlobProps {
  blob: Blob;
}

export const getStaticProps : GetStaticProps<BlobProps> = async () => {

  const response = await fetch(`http://localhost:1337/api/blobs?populate[associate][fields]`, {
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
  });

  const blobs : BlobsJson = await response.json();
  
  const blob : Blob = blobs.data.sort((b1, b2)=> (b1.attributes.publishedAt < b2.attributes.publishedAt) ? 1 : -1)[0];

  return {
      props: {
          blob: blob
      },
  };
};



export default function Home({blob : blob }: BlobProps) {
  return (
    <>
      <p>Use dark mode for the best experience ;)</p>
      <h1 style={{marginBottom: "1.5rem"}}>Most resent post:</h1>
      <BlobArticle blob={blob}/>
    </>
  )
}
