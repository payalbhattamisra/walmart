import {
    Box,
    Button,
    Circle,
    Flex,
    HStack,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React, { useContext } from "react";
  import { RxCross2 } from "react-icons/rx";
  import { GoPlus } from "react-icons/go";
  import { CiHeart } from "react-icons/ci";
  import { Scrollbars } from "react-custom-scrollbar";
  import { LiaGreaterThanSolid } from "react-icons/lia";
  import { AuthContext } from "../AuthContext/AuthProvider";
  
  const Product4 = () => {
    const {counter,calculatePrice}=useContext(AuthContext)
  
  
    return (
      <HStack>
        <Flex w="100%" justifyContent={"space-evenly"} mt={5}>
          <Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
              <Circle>
                <CiHeart />
              </Circle>
            </Box>
            <Box height={"200px"}>
              <Image
                src="https://images.furnituredealer.net/img/products/benchcraft/color/olin_4000238-b1.jpg"
                alt="image1"
                h="100%"
              />
            </Box>
            <Box>
              <Text fontSize={13} className="rotobo-regular">
                Sponcered
              </Text>
              <Flex fontSize={20} alignItems={"center"}>
                <Box>$1700.99</Box>
              </Flex>
              <Text>
                English Roll Arm Sofa <br />  Comfortable Elegant...
              </Text>
              <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
                counter()
                calculatePrice(1700.99)
              }}>
                <GoPlus />
                Add
              </Button>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
              <Circle>
                <CiHeart />
              </Circle>
            </Box>
  
            <Box height={"200px"}>
              <Image
                src="https://image.architonic.com/img_pro2-4/121/1269/link-sofa-group-0029-b.jpg"
                alt="image1"
                h="100%"
              />
            </Box>
            <Box>
              <Text fontSize={13} className="rotobo-regular">
                Sponcered
              </Text>
              <Flex fontSize={20} alignItems={"center"}>
                <Box> $2450.99</Box>
              </Flex>
              <Text>
                Lawson Sofa <br />  Classic Casual Boxy...
              </Text>
              <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
                counter()
                calculatePrice(2450.99)
              }}>
                <GoPlus />
                Add
              </Button>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontSize={30} onClick={()=>{
                counter()
                calculatePrice(16.99)
              }}>
              <Circle>
                <CiHeart />
              </Circle>
            </Box>
  
            <Box height={"200px"}>
              <Image
                src="https://images.furnituredealer.net/img/products/signature_design_by_ashley/color/darcy%207500_7500838-b1.jpg"
                alt="image1"
                h="100%"
              />
            </Box>
            <Box>
            <Text fontSize={13} className="rotobo-regular">
                Sponcered
              </Text>
              <Flex fontSize={20} alignItems={"center"}>
                <Box>$1466.99</Box>
              </Flex>
              <Text>
                Camel Back Sofa <br /> Curved Elegant Traditional...
              </Text>
              <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
                counter()
                calculatePrice(1466.99)
              }}>
                <GoPlus />
                Add
              </Button>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
              <Circle>
                <CiHeart />
              </Circle>
            </Box>
  
            <Box height={"200px"}>
              <Image
                src="https://th.bing.com/th/id/OIP.CzhuNNs_maOD0gtfvnSnagHaHa?rs=1&pid=ImgDetMain"
                alt="image1"
                h="100%"
              />
            </Box>
            <Box>
              <Text fontSize={13} className="rotobo-regular">
                Sponcered
              </Text>
              <Flex fontSize={20} alignItems={"center"}>
                <Box> $1456.99</Box>
              </Flex>
              <Text>
                Mid Century Sofa<br /> Retro Sleek Minimalist...
              </Text>
              <Button border={"1px solid black"} borderRadius={20} bg="white" onClick={()=>{
                counter()
                calculatePrice(1456.99)
              }}>
                <GoPlus />
                Add
              </Button>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
              <Circle>
                <CiHeart />
              </Circle>
            </Box>
  
            <Box height={"200px"}>
              <Image
                src="https://th.bing.com/th/id/OIP.ysIb92Fx2EH5O57r70clcAHaHa?rs=1&pid=ImgDetMain"
                alt="image1"
                h="100%"
              />
            </Box>
            <Box>
            <Text fontSize={13} className="rotobo-regular">
                Sponcered
              </Text>
              <Flex fontSize={20} alignItems={"center"}>
                <Box> $2121</Box>
              </Flex>
              <Text>
              Contemporary Queen Sleeper<br /> Sofa with Chaise...
              </Text>
              <Button border={"1px solid black"} borderRadius={20} bg="white">
                Options
              </Button>
            </Box>
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
              <Circle>
                <CiHeart />
              </Circle>
            </Box>
  
            <Box height={"200px"}>
              <Image
                src="https://images.furnituredealer.net/img/products/flexsteel/color/main%20street_5988-43-b1.jpg"
                alt="image1"
                h="100%"
              />
            </Box>
            <Box>
            <Text fontSize={13} className="rotobo-regular">
                Sponcered
              </Text>
              <Flex fontSize={20} alignItems={"center"}>
                <Box> $2576.99</Box>
              </Flex>
              <Text>
               Monterey Sofa <br /> best classic elegant...
              </Text>
              <Button border={"1px solid black"} borderRadius={20} bg="white">
                Options
              </Button>
              <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
                <Button
                  fontSize={30}
                  border={"1px solid black"}
                  borderRadius={"100%"}
                >
                  <LiaGreaterThanSolid />
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </HStack>
    );
  };
  
  export default Product4;