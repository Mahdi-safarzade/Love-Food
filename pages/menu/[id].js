import DetailsPage from '@/components/templates/DetailsPage';
import { useRouter } from 'next/router';
import React from 'react';

const Details = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) return <h2>Loading...</h2 >

  return (
    <div>
      <DetailsPage {...data} />
    </div>
  );
};

export default Details;


export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`)
  const json = await res.json()
  const data = json.slice(0, 10)

  const paths = data.map(food => ({ params: { id: food.id.toString() } }))

  return {
    paths,
    fallback: true,
  }
}


export async function getStaticProps(context) {
  const { params: { id } } = context
  const response = await fetch(`${process.env.BASE_URL}/data/${id}`)
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true,
    }

  }

  return {
    props: { data },
    revalidate: 1 * 60 * 60 //seconds
  }
}
