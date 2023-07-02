import React from 'react' 
import styled from "styled-components"
import Button from "./resusable/Button";

const menusData = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "Aboutus",
    },
    {
        id: 3,
        name: "Classes",
    },
    {
        id: 4,
        name: "Blogs",
    },
];

export const Header = () => {
  return (
    <Box>
        <Left>
            <H3>FITNESS GYM</H3>
        </Left>
        <Right>
        <Menus>
        {menusData.map((_, index) => {
            return (
                <Menu key={_.id}>{_.name}</Menu>
            )
        })}
        </Menus>
        <Button>
            Join us
        </Button>
        </Right>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px;
`;
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Menus = styled.div``;
const Menu = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  text-transform: capitalize;
  margin-right: 30px;
  font-size: 18px;
`;
const H3 = styled.h3`
  font-size: 24px;
  color: red; /* Changed color to red */
  margin: 0;
  padding: 0;
`;