import { Grid, GridItem, Show, Image, Box, Heading, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}
    >

      <GridItem>
        <Box width="100%" minHeight="90vh"
          border="2px solid red">
          <Flex
            mt="80vh"
            justify="center"
            align="center"
            gap="10px" // optional, to add some space between them
          >
            <Box
              width="40px"
              minHeight="40px"
              border="2px solid red"
            />
            <Box
              width="40px"
              minHeight="40px"
              border="2px solid red"
            />

            <Box
              width="40px"
              minHeight="40px"
              border="2px solid red"
            />
          </Flex>

        </Box>
      </GridItem>


      <GridItem>
        <Flex
        justify="center"
            align="center"
        >
        <Box boxSize='sm'>
          <Heading as="h2">Daniel Wirenfeldt</Heading>
          <p>lorem ipsum dolor</p>
        </Box>

        <Box>

          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>

        </Flex>
      </GridItem>


      <GridItem>

        <Flex
        justify="center"
        align="center"
        direction="column"
        >

        <Box>
          <Heading as="h3">
            Projekt
          </Heading>
        </Box>

        <Box>
          <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
        </Flex>

      </GridItem>

    </Grid>
  );
}

export default App;
