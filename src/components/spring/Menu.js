import React, { useState, useRef, useEffect } from "react";
import data from "./data";
import { Global, Container, Item } from "./styles";
import { useTransition, useSpring, useChain, config } from "react-spring";
import $ from "jquery"
import 'jquery-ui-dist/jquery-ui';
import {Link} from "react-router-dom"



document.body.style.background = "url('https://media3.giphy.com/media/3ornk52pzOGn4OhVpS/giphy.gif?cid=790b76115d1a4818335778616b7bf4a8&rid=giphy.gif') no-repeat center center/cover";
function Menu() {
  const [open, set] = useState(false);
  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: { size: open ? "100%" : "20%", background: open ? "white" : "hotpink" }
  });

  useEffect(()=>{
    $('#menu').draggable()
  },[])

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6
  ]);

  return (
    <>
      <Global />
      <Container
        id="menu"
        style={{ ...rest, width: size, height: size }}
        onClick={() => set(open => !open)}
      >
        {transitions.map(({ item, key, props }) => (
            <Link to={item.to}>
                <Item key={key} style={{ ...props, background: item.css }}>
                  <h1>{item.name}</h1>

                </Item>
            </Link>
        ))}
      </Container>
    </>
  );
}

export default Menu;