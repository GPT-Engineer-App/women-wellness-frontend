import { Container, VStack, Heading, Text, Button, Image, Box } from "@chakra-ui/react";
import { FaHeart, FaFemale, FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={10} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1595450547833-95af46d7c43a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb25nZXZpdHklMjBjb25jZXB0fGVufDB8fHx8MTcxNDkyMTYxOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Longevity Concept" />
        <Heading as="h1" size="2xl" textAlign="center">
          Empowering Women in Longevity
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join our community to explore and enhance your journey towards a healthier, longer life.
        </Text>
        <Box display="flex" gap="20px" justifyContent="center">
          <Button leftIcon={<FaHeart />} colorScheme="pink" variant="solid">
            Health Tips
          </Button>
          <Button leftIcon={<FaFemale />} colorScheme="purple" variant="outline">
            Women's Care
          </Button>
          <Button leftIcon={<FaLeaf />} colorScheme="green" variant="ghost">
            Sustainability
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
