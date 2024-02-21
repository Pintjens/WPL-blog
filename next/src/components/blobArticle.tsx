import Link from "next/link";
import {Blob} from "../types"
import { Marked } from 'marked';

interface BlobArticleProps {
  blob: Blob;
}

export default function BlobArticle ({blob} : BlobArticleProps) {

  const marked = new Marked();

  return (
    <article>
      <h1>{blob.attributes.title}</h1>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(blob.attributes.message) }}></div>
      <br/>
      <section style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
      <p>Publiced: {blob.attributes.publishedAt.substring(0,10)}</p><p>By: Pintjens Bert</p>
      </section>
      <section className="blogNav">
        <section>
          this nav section is still under construction
          {/* <p>Previous</p>
          <div>
            <Link href={{ pathname: `/posts/${blob.id }` }} key={blob.id}>Day</Link>
            <Link href={{ pathname: `/posts/${blob.id }` }} key=  {blob.id}>Blog</Link>
          </div>
        </section>
        <section>
          <p>Next</p>
          <div>
            <Link href={{ pathname: `/posts/${blob.id }` }} key={blob.id}>Day</Link>
            <Link href={{ pathname: `/posts/${blob.id }` }} key={blob.id}>Blog</Link>
          </div> */}
        </section>
      </section>
    </article>
    ) 
  }