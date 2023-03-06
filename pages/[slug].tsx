export default function PagesSlug({ slug }) {
  return <div>Pages dir slug {slug}</div>
}

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { slug: 'random' }, locale: 'en' },
      { params: { slug: 'another' }, locale: 'id' },
      { params: { slug: 'modnar' }, locale: 'en' },
    ],
    fallback: false
  }
}

export const getStaticProps = (ctx) => {
  return {
    props: {
      slug: ctx.params.slug
    }
  }
}