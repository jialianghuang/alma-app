import React from 'react';
import styled from 'styled-components';

export default function Submitted() {
  return (
    <Overlay>
      <ModalContainer>
        <Content>
          <h2>Application Submitted</h2>
          <p>You have successfully submitted the application!</p>
        </Content>
      </ModalContainer>
    </Overlay>
  );
};



const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  position: relative;
  width: 500px;
  height: 300px;
  max-width: 100%;
`;

const Content = styled.div`
  h2 {
    margin-top: 0;
  }

  p {
    margin: 0;
  }
`;