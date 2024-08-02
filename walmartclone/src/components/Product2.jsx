import {
    Box,
    Button,
    Circle,
    Flex,
    HStack,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import video1 from "../assets/video1.mp4";
  import { IoIosPause } from "react-icons/io";
  import { BiPause, BiPlay } from "react-icons/bi";
  import { Link } from "react-router-dom";
  import { CiHeart } from "react-icons/ci";
  import { LiaGreaterThanSolid } from "react-icons/lia";
  
  const Product2 = () => {
    const [videoControl, setVideoControl] = useState(true);
  
    function handleVideoplayer() {
      setVideoControl((prev) => !prev);
    }
  
    return (
      <>
        <HStack mt={20}>
          <Flex w="100%" justifyContent="space-evenly">
            <Box w="48%">
              <Flex justifyContent="space-between">
                <Box>
                  <Text fontSize={20} className="roboto-bold">Pack like a pro</Text>
                  <Text className="roboto-regular">From suitcases to sunglasses.</Text>
                </Box>
                <Box>
                  <Link>
                    <u>View all</u>
                  </Link>
                </Box>
              </Flex>
              <Flex justifyContent="space-between" >
                <Box>
                  <Box display={"flex"} justifyContent={"flex-end"} fontSize={30}>
                    <Circle>
                      <CiHeart />
                    </Circle>
                  </Box>
                  <Box height={200}>
                    <Image
                      src="https://i5.walmartimages.com/asr/11beb08b-1a88-4e41-8fbc-62f6e1da3c3f.845006767ae4cecc602ee126d2fcc359.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
                      h="100%"
                    />
                    <Text fontSize={20} className="roboto-bold">$12.98</Text>
                    <Text>kennedy chair<br />
                    Rocking Classic Wood...
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
                  <Box height={200}>
                    <Image
                      src="https://i5.walmartimages.com/asr/384d01ad-5ae6-4e67-b88c-719df96591ef.aa84a88a893bcec84d7a555802f4c20e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                      h="100%"
                    />
                     <Text fontSize={20} className="roboto-bold">$9.98</Text>
                    <Text>Ladderback chair<br />
                    Wooden Rungs Traditional Seat.
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
                  <Box height={200}>
                    <Image
                      src="https://sreditingzone.com/wp-content/uploads/2018/04/Chair-Png-5-768x995.png"
                      h="100%"
                    />
                     <Text fontSize={20} className="roboto-bold">$14.98</Text>
                    <Text> Traditional Wingback Chair<br />
                    elegance and classic design
                    </Text>
                    <Button border={"1px solid black"} borderRadius={20} bg="white">
                Options
              </Button>
                  </Box>
                </Box>
  
                <Box>
                  <Box height={200} display={"flex"} alignItems={"center"} fontSize={40}>
                  <Button fontSize={40} border={"1px solid black"} display={"flex"} alignItems={"center"} p={8} borderRadius={"100%"} w={10} hh={10}>&gt;</Button>
                  </Box>
                </Box>
              </Flex>
            </Box>
  
            <Box bg="green" w="48%">
              <Box mb={-10} display={"flex"} justifyContent={"flex-end"}>
                <Button borderRadius={"100%"} fontSize={20}>
                  {videoControl ? <BiPause /> : <BiPlay />}
                </Button>
              </Box>
              <video src={video1} autoPlay loop muted></video>
            </Box>
          </Flex>
        </HStack>
      </>
    );
  };
  
  export default Product2;