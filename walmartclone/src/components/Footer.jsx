import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <VStack spacing={0} w="100%">
      <Box w="100%" mt={100}>
        <Box
          h={150}
          bg="#E6F1FC"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text className="roboto-regular">We’d love to hear what you think!</Text>
          <Button
            border="1px solid black"
            borderRadius={20}
            bg="white"
            mt={5}
          >
            Give feedback
          </Button>
        </Box>
        <Box
          bg="#004F9A"
          color="white"
          py={8}
          textAlign="center"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            wrap="wrap"
            mb={4}
          >
            {["All Departments", "Store Directory", "Careers", "Our Company", "Sell on Walmart.com", "Help", "Product Recalls", "Accessibility", "Tax Exempt Program", "Get the Walmart App"].map((item, index) => (
              <Text key={index} mx={{ base: 0, md: 2 }} my={{ base: 1, md: 0 }}>
                {item}
              </Text>
            ))}
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            wrap="wrap"
            mb={4}
          >
            {["Sign-up for Email", "Safety Data Sheet", "Terms of Use", "Privacy & Security", "California Supply Chain Act", "Your Privacy Choices", "Notice at Collection"].map((item, index) => (
              <Text key={index} mx={{ base: 0, md: 2 }} my={{ base: 1, md: 0 }}>
                {item}
              </Text>
            ))}
            <Box my={{ base: 1, md: 0 }}>
              <Image
                src="https://i5.walmartimages.com/dfwrs/76316474-f70e/k2-_67001355-c576-4ca2-989d-260a2673c41a.v1.png"
                w={8}
                mx="auto"
              />
            </Box>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="center"
            wrap="wrap"
            mb={4}
          >
            {["Request My Personal Information", "Brand Shop Directory", "Pharmacy", "Walmart Business", "#IYWYK"].map((item, index) => (
              <Text key={index} mx={{ base: 0, md: 2 }} my={{ base: 1, md: 0 }}>
                {item}
              </Text>
            ))}
          </Flex>
          <Box mt={10}>
            <Text>© 2024 Walmart. All Rights Reserved.</Text>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};
