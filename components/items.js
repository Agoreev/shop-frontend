import React, { Component } from "react";
import { Query } from "react-apollo";

import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./item";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

class items extends Component {
  render() {
    return (
      <Center>
        <p>Items</p>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) {
              return <p>Loading</p>;
            }
            if (error) {
              return <p>error</p>;
            }
            return (
              <ItemsList>
                {data.items.map((item) => {
                  return <Item item={item} key={item.id}></Item>;
                })}
              </ItemsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}
export default items;

export { ALL_ITEMS_QUERY };
