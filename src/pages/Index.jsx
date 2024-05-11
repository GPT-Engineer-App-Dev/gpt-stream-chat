import { Container, VStack, Text, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessages = [...messages, { sender: "user", text: inputValue }];
    setMessages(newMessages);
    simulateResponse(inputValue);
    setInputValue("");
  };

  const simulateResponse = (userInput) => {
    const response = `Echoing: ${userInput}`;
    const newMessages = [...messages, { sender: "user", text: inputValue }, { sender: "bot", text: response }];
    setTimeout(() => setMessages(newMessages), 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb="8">Chat with GPT-3.5 Simulator</Text>
        <Box width="100%" bg="gray.100" p="4" borderRadius="md" overflowY="auto" maxHeight="300px">
          {messages.map((message, index) => (
            <Text key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} bg={message.sender === "user" ? "blue.100" : "green.100"} p="2" borderRadius="md" m="1">
              {message.text}
            </Text>
          ))}
        </Box>
        <Input placeholder="Type your message here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} />
        <Button colorScheme="blue" onClick={handleSendMessage}>Send</Button>
      </VStack>
    </Container>
  );
};

export default Index;