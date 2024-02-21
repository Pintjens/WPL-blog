import { TagsJson, Tag, bearer } from "@/types";
import { GetStaticProps } from "next";
import Link from "next/link";

interface TagsProps {
    tags: Tag[];
  }
  
  export const getStaticProps : GetStaticProps<TagsProps> = async () => {

    let response = await fetch(`http://localhost:1337/api/tags`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    let tagsJson : TagsJson = await response.json();
    
    let allTags = [...tagsJson.data,  ]
    
    response = await fetch(`http://localhost:1337/api/technologies`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    tagsJson = await response.json();

    allTags.push(...tagsJson.data);
    


    return {
        props: {
            tags: allTags
        },
    };
};

  
  const Tags = ({ tags: tags }: TagsProps) => {
    return (
      <>
      <h1>All Tags</h1>
      <ul>
        {tags.map((tag, index) => (
          <li key={tag.id} className="link blobShort">
            <Link href={{ pathname: `/tags/${index}` }} key={tag.id}>
            
            <h2>{tag.attributes.Name}</h2>
            <br/>
            <p className="ph-disp-none" style={{color: "purple"}}>Keep reading</p>
            </Link>

            </li>
        ))}
      </ul>
      </>
    );
  };

  export default Tags;