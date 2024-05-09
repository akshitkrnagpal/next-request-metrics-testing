import { GetServerSideProps } from "next";

export default function Home(props: any) {
  return <main className="pre">{JSON.stringify(props, null, 2)}</main>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    `localhost:${process.env.PORT}`;
  const response = await fetch(`http://${url}/api/hello`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
