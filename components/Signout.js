import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      id
    }
  }
`;

class Signout extends Component {
  render() {
    return (
      <Mutation mutation={SIGNOUT_MUTATION}>
        {(signout, { error, loading }) => {
          return (
            <a
              onClick={(e) => {
                e.preventDefault();
                signout();
              }}
            >
              sign out
            </a>
          );
        }}
      </Mutation>
    );
  }
}

export default Signout;
