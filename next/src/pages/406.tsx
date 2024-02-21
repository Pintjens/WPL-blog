import { BlobsJson, Blob, bearer, MemesJson, Meme } from "@/types";
import { GetStaticProps } from "next";
import { styled } from "styled-components";

interface Page406Props {
    memes: Meme[];
  }
  
  export const getStaticProps : GetStaticProps<Page406Props> = async () => {

    const response = await fetch(`http://localhost:1337/api/memes?populate[image][fields]=url`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    const memesJson : MemesJson = await response.json();

    return {
        props: {
            memes: memesJson.data,
        },
    };
};

  
const MemeItem = styled.li`
display: flex;
flex-direction: column;
gap: 0.6rem;
margin: 1.2rem 0rem;
border-top: 3px solid silver;
padding: 0.9rem 0rem;
img{
  height: 9rem;
  max-width: 96vw;
}
`

  const Page406 = ({ memes: memes }: Page406Props) => {
    return (
        <>
        <h1>Things that objectively should be exterminated for the better of all human kind.</h1>
        <br style={{margin: "0.3rem"}}/>
        <h2>I know its a bit empty for now, so feel free to suggest more content =)</h2>
        {
          memes.length > 0 &&
          <ul>
          {memes.map((meme : Meme, index : number) => (
            <MemeItem key={index}>
              <h3>{index+1}. {meme.attributes.title}</h3>
              <img src={meme.attributes.image.data.attributes.url}/>
            </MemeItem>
          ))}
        </ul>
        }

        </>
    );
  };

  export default Page406;