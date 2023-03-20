"use client"

import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"


export default function Header() {
    return(
        <Box
            pos="fixed"
            w="100%"
            zIndex={2}
            as="header"
        >
            <Flex
                bg="white"
                color="gray.800"
                minH={"60px"}
                py={{ base:2 }}
                px = {{ base:4 }}
                borderBottom="solid"
                borderColor="gray.200"
                align="center"
            >
                <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
                    <Heading as="h1" size="lg">
                        <Link href="/">打刻管理</Link>
                    </Heading>
                    <Button
                      as={Link}
                      fontSize="sm"
                      fontWeight={600}
                      color="white"
                      bg="gray.200"
                      href="./space"
                      _hover={{
                        bg: "blue.200",
                      }}
                    >
                        ページを移動する
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}