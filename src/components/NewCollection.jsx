import NewCollectionCard from "./NewCollectionCard";

import classes from "./NewCollection.module.css";

const DUMMY_INFO = [
  {
    id: 1,
    title: "Blooming Gent: Men's Floral Print Shirt",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure facere corrupti nihil tempore voluptates ducimus eaque! Distinctio quibusdam voluptatum corporis alias ab numquam est quisquam ipsum et, facilis at odit.",
    image: "images/camisa.png",
  },
  {
    id: 2,
    title: "Tiny Trends: Adorable Kids Jumpsuit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure facere corrupti nihil tempore voluptates ducimus eaque! Distinctio quibusdam voluptatum corporis alias ab numquam est quisquam ipsum et, facilis at odit.",
    image: "images/bebe.png",
  },
  {
    id: 3,
    title: "Chic Carriers: Fashionable Purses for Women",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure facere corrupti nihil tempore voluptates ducimus eaque! Distinctio quibusdam voluptatum corporis alias ab numquam est quisquam ipsum et, facilis at odit.",
    image: "images/cartera.png",
  },
];

const NewCollection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.textContainer}>
        <h3>coming soon</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nassam uvo
          tip ta.
        </span>
      </div>
      <article className={classes.cardsContainer}>
        {DUMMY_INFO.map(product => (
          <NewCollectionCard
            key={product.id}
            title={product.title}
            text={product.text}
            image={product.image}
          ></NewCollectionCard>
        ))}
      </article>
    </section>
  );
};
export default NewCollection;
