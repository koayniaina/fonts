import Category from "@/components/category/Category";
import Contats from "@/components/contact/Contats";
import Heads from "@/components/home/Heads";


export default function Home() {
  return (
    <div>
      <span id="home">
        <Heads />
      </span>
      <span id="category">
        <Category />
      </span>
      {/* <span   id="#post">
        <Heads />
      </span> */}
      <span   id="contact">
        <Contats />
      </span>
       {/* <span   id="#marques">
        <Heads />
      </span> */}
    </div>
  );
}
