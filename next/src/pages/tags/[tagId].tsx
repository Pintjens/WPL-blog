import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Blob, BlobJson, TagsJson, Tag, bearer, TagJson, BlobsJson, Technologie } from "@/types";
import BlobArticle from "@/components/blobArticle";
import Link from "next/link";


interface Paths extends ParsedUrlQuery {
    tagId: string
  }

  export const getStaticPaths : GetStaticPaths<Paths> = async () => {
    let allTags : Tag[];
    
    let response = await fetch(`http://localhost:1337/api/tags`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    let tagsJson : TagsJson = await response.json();
    
    allTags = [...tagsJson.data,  ]
    
    response = await fetch(`http://localhost:1337/api/technologies`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    tagsJson = await response.json();

    allTags.push(...tagsJson.data);
      const paths = allTags.map((tag : Tag, index : number) => ({
        params: { tagId: index.toString() },
    }));

      return {
          paths: paths,
          fallback: false,
      };
  };

  interface TagProps {
    tag: Tag;
    blogPosts : Blob[]|null
  }
  

  export const getStaticProps : GetStaticProps<TagProps, Paths> = async (context) => {
  

    let allTags : Tag[];
    
    let response = await fetch(`http://localhost:1337/api/tags`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });


    let tagsJson : TagsJson = await response.json();
    
    allTags = [...tagsJson.data,  ]
    
    response = await fetch(`http://localhost:1337/api/technologies`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    tagsJson = await response.json();

    allTags.push(...tagsJson.data);

    const tagId : number = +context.params?.tagId!;

    response = await fetch(`http://localhost:1337/api/blobs?populate=*`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });
    const blogPostsJson : BlobsJson = await response.json();
    const blogPosts : Blob[] = blogPostsJson.data;


    const tagToFind : Tag = allTags[tagId];
    const blobPosts = blogPosts.filter((blog : Blob) => blog.attributes.tags.data.find((tag : Tag) => tag.attributes.Name == tagToFind.attributes.Name)
    || blog.attributes.technologies.data.find((technologie : Technologie) => technologie.attributes.Name == tagToFind.attributes.Name))
    
    return {
        props: {
            tag: tagToFind,
            blogPosts: blobPosts.length > 0 ? blobPosts : null
        },
    };
  };




  const TagBlogPosts = ({ tag: tag, blogPosts : posts }: TagProps) => {
    return (
      <div style={{width:"max-content"}}>

        <h2>{tag.attributes.Name}</h2>
        {posts
        &&
        <ul>
          {posts.map((post : Blob, index : number) =>
          <Link href={{ pathname: `/posts/${post.id }` }} key={post.id}>
            <li>
              {post.attributes.title}
            </li>
          </Link>
          )}
        </ul>
        ||
        <p>No content linked to this tag yet</p>
        }

      </div>

    );
};

export default TagBlogPosts;