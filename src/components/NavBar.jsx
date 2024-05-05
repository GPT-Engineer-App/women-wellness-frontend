import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NavBar() {
  return (
    <Flex as="nav" bg="blue.500" color="white" padding="4" justifyContent="space-between">
      <Link as={RouterLink} to="/" p="2">Home</Link>
      <Link as={RouterLink} to="/pricing" p="2">Pricing</Link>
      <Link as={RouterLink} to="/about" p="2">About Us</Link>
      <Link as={RouterLink} to="/contact" p="2">Contact</Link>
    </Flex>
  );
}

export default NavBar;