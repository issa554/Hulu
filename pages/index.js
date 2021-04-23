import Head from 'next/head'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Res from '../components/res';
import req from '../utils/req';

export default function Home({results}) {
 
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />
   <Nav />
      <Res results={results} />
    </div>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${req[genre]?.url || req.fetchTrending.url}`
    ).then((res) => res.json()
  );

  return {
    props: {
      results: request.results
    }
  }
};