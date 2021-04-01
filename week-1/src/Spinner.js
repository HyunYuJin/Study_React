import React from 'react';
import styled from 'styled-components';
import AutorenewRoundedIcon from '@material-ui/icons/AutorenewRounded';

const Spinner = () => {
    return (
        <Outter>
            <AutorenewRoundedIcon style={{fontSize: "150px", color: "#996699"}} />
        </Outter>
    );
}

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ede2ff;
`;

export default Spinner;