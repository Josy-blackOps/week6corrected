import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

//define a getStaticProps() function
export async function getStaticProps( { params } ) {
  const itemData = await getData(params.id);
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
    <h5 className="card-title">{itemData.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{itemData.phone}</h6>
    <p className="card-text">{itemData.birthdate}</p>
    <a href="#" className="card-link">{itemData.email}</a>
  </div>
  <div className="card-footer text-body-secondary">
    2 days ago
  </div>
</article>
    </Layout>
  );
}