import React from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
function PasswordInput(props) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const {
    placeholder,
    name,
    onChange,
  } = props;

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        borderWidth="2px"
        borderColor={"var(--color-light-grey)"}
        _hover={{borderColor: "var(--color-grey)"}}
        _focus={{borderColor: "brand.100", borderWidth: "2px"}}
      />
      <InputRightElement width="4.5rem">
        <Button
          h="1.75rem"
          size="sm"
          onClick={handleClick}
          _focus={{border: "none"}}
        >
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput;