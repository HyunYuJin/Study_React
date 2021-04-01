import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';

const BucketList = (props) => {
  // const my_lists = props.list;
  const bucket_list = useSelector(state => state.bucket.list);
  console.log(bucket_list);

  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle key={index} color={list.completed ? "#FFF" : "#000"} bgColor={list.completed ? "#996699" : "#eee" } onClick={(() => {
            props.history.push('/detail/' + index);
          })}>
            { list.text }
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props => props.color)};
  background-color: ${(props => props.bgColor)};
  font-weight: 800;
`;

export default BucketList;