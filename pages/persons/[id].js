import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

//define a getStaticProps() function
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
  //now itemData has snacks array
  return{
    props: {
      itemData
    }
  };
}

//define a getStaticPaths() function
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

//export dynamically routed page comonent Entry
export default function Entry( { itemData } ) {
  return (
    <Layout>
    <article className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h4 className="card-title">{itemData.name}</h4>
    <h5 className="card-subtitle mb-2 text-body-secondary">{itemData.phone}</h5>
    <p className="card-text">{itemData.birthdate}</p>
    <a href="#" className="card-link">{itemData.email}</a>
  </div>
      <h6>Favorite Snacks</h6>
      <ol>
         {itemData.snacks && itemData.snacks.map(
          ({ id, snack }) => (
            <li key={id}>
              {snack}
            </li>
            )
    )
         }
      </ol>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</article>
    </Layout>
  );
}