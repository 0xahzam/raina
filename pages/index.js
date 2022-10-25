import Head from 'next/head'
import { Flex, Text, Divider } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <head>
      <title>Raina Tyagi</title>
      </head>
    <div className='main'>

      <Flex justifyContent={"center"}>
        <Flex flexDirection={"column"} marginTop={{base:"40px",md:"80px"}} marginBottom = {{base:"40px",md:"40px"}} width={{base:"280px",md:"386px"}}>
          
          <Flex flexDirection={"column"}>
            <Text fontSize={"24px"} fontWeight={"500"}>Raina Tyagi.</Text>
            <Flex background={"#FEF9E7"} marginTop={"21px"} rounded={"7px"} p={"14px"}>
              <Text  fontSize={"18px"} fontWeight={"500"}>  
              I write. welcome to my store house of words. find me <a href = "https://www.instagram.com/rayyhoney/" style={{textDecoration : "1px underline"}}>here</a>
              </Text>
              </Flex>
            <Divider marginTop={"21px"} color={"#CCCBC5"}/>
          </Flex>
          
          <Flex flexDir={"column"} marginTop={"33px"} gap={"33px"}>

          <Flex flexDir={"column"}>
            <Text fontSize={"23px"} fontWeight={"500"} opacity={"90%"} _hover={{textDecor:"1px underline"}}>
              <a href = "./">
              story time pt 3
              </a>
              </Text>
            <Text fontSize={"16px"} fontWeight={"500"} opacity={"80%"} paddingTop={"10px"}>
            well well lorem is dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim            </Text>
          </Flex>

          <Flex flexDir={"column"}>
            <Text fontSize={"23px"} fontWeight={"500"} opacity={"90%"} _hover={{textDecor:"1px underline"}}>
              <a href = "./">
              story time pt 2
              </a>
              </Text>
            <Text fontSize={"16px"} fontWeight={"500"} opacity={"80%"} paddingTop={"10px"}>
            well well lorem is dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim            </Text>
          </Flex>

          <Flex flexDir={"column"}>
            <Text fontSize={"23px"} fontWeight={"500"} opacity={"90%"} _hover={{textDecor:"1px underline"}}>
              <a href = "./">
              story time pt 1
              </a>
              </Text>
            <Text fontSize={"16px"} fontWeight={"500"} opacity={"80%"} paddingTop={"10px"}>
            well well lorem is dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim            </Text>
          </Flex>

          

          </Flex>
        </Flex>
      </Flex>
    </div>
    </>
  )
}
