import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrap = styled(motion.div)`
  background: var(--ins-background-secondary);
  padding-left: 7px;
  border-radius: 3px;
  border: 1px solid var(--ins-border-primary);
  position: relative;

  display: flex;
  align-items: center;

  margin-bottom: 6px;
`;
const Label = styled(motion.label)`
  color: var(--ins-mono-700);
  font-size: 12px;
  line-height: 36px;
  transform-origin: 0% 100%;
  pointer-events: none;
  /* border: 1px solid green; */
`;
const BaseInput = styled(motion.input)`
  appearance: none;
  border: none;
  border-radius: unset;
  margin: unset;
  outline: unset;
  box-sizing: border-box;
  background: unset;
  padding: unset;

  padding-left: 7px;

  position: absolute;
  width: 100%;
  left: 0;
  /* border: 1px solid blue; */
`;

const variants = {
  input: {
    normal: {
      height: "100%",
      bottom: 0
    },
    typed: {
      height: "initial",
      bottom: 3
    }
  },
  label: {
    normal: {
      scale: 1,
      y: 0
    },
    typed: {
      scale: 0.83333,
      y: -10
    }
  }
};

export function Input() {
  const [typed, setTyped] = useState(false);

  return (
    <Wrap animate={typed ? "typed" : "normal"}>
      <BaseInput
        onChange={(e) => {
          const value = e.target.value;
          if (value) setTyped(true);
          else setTyped(false);
        }}
        variants={variants.input}
      />
      <Label variants={variants.label}>Phone number, username, or email</Label>
    </Wrap>
  );
}
