import { LoaderFunction, MetaFunction } from "remix";
import { styled } from "~/styles/stitches.config";

export const meta: MetaFunction = () => {
  return {
    title: "Homepage",
    description: "This is the homepage",
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log('Executed on server-side');

  return null;
};

const Wrapper = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$background',

  h1: {
    color: '$primary'
  }
})

export default function Index() {
  return (
    <Wrapper>
      <h1>Hello</h1>
    </Wrapper>
  );
}
