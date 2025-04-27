import { Grid, GridItem, Show, Image, Box, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}
    >

<GridItem>
<Box boxSize='sm'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
</GridItem>


<GridItem>
<Box boxSize='sm'>
  <Heading as="h2">Daniel Wirenfeldt</Heading>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
</GridItem>


<GridItem>
  <Box>
    <Heading as="h3">
      Projekt
    </Heading>
  </Box>

  <Box>
    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  </Box>
</GridItem>

    </Grid>
  );
}

export default App;
