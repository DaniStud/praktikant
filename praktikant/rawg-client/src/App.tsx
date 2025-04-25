import { Grid, GridItem, Show, Image, Box } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header header" "aside main"`,
      }}
    >

<Box boxSize='sm'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
