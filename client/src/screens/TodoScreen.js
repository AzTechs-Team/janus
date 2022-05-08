import React, { useState } from "react";
import { Container, Image, Text, VStack,HStack, Box, Button} from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";

const TodoScreen = () => {
    const fileTypes = ["JPG", "PNG"];
    const [file, setFile] = useState(null);
    const [image, setImage] = useState([]);
	
    const handleChange = (file) => {
        setFile(file);
        for (const key in file) {
            if (key !== "length" && key !== "item") {
                const _image = file[key];
                const rf = new FileReader();
                rf.readAsDataURL(_image);
                rf.onloadend = (event) => {
                    handleApiCall(event.target.result);
                };
            }
        }
    };

    const handleApiCall = async (result) => {
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_API_KEY}`;
        const body = new FormData();
        body.append("image", result.split(",").pop());
        body.append("name", "test.jpg");
        body.append("expiration", "300");
        try {
            let res = await fetch(url, {
                method: "POST",
                body: body,
            });
            res = await res.json();
            let temp = image
            temp.push(res.data.url)
            setImage(temp)
            setImage([...image])

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container bgColor="primary.750"
            py={7}
            px={14}
            m={6}
            borderRadius="xl"
            maxH="100%"
            maxW="92%"
            color="white"
        >
            <Box
                bgColor="primary.1000"
                p={8}
                m={6}
                borderRadius="xl"
                maxH="100%"
                maxW="92%"
                color="white">
                <FileUploader handleChange={handleChange} multiple={true} name="file" types={fileTypes} >
                    <Box
                        display="flex"
                        p={7}
                        alignItems="center"
                        justifyContent="center"
                        bgColor="primary.1000"
                        border="3px"
                        borderColor="accent.300"
                        cursor="pointer"
                        borderStyle="dashed"
                        h="60"
                        borderRadius="lg"
                        maxH="150%"
                        color="white">
                        <VStack textColor='accent.300'>
                            <Text fontSize="lg">Drag a photo here</Text>
                            <Text fontSize="xs">or</Text>
                            <Button bgColor="accent.100" color="primary.750" _hover={{ bgColor: "accent.200" }} _focus={{ outlineStyle: "none" }}>Select a photo from your device</Button>
                        </VStack>
                    </Box>
                </FileUploader>
                <HStack pt={4} spacing={4}> 
                    {image.map((i) => { 
                        return <Image borderRadius="7px" key={i} src={i} boxSize="20" objectFit='cover'></Image>
                    })}
                </HStack>
            </Box>
        </Container>
    );
};

export default TodoScreen;
