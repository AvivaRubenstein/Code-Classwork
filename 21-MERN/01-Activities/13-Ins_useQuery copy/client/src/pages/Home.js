import React from 'react';
import ProfileList from '../components/ProfileList';
//useQuery from apollo-client is the method we use to use queries for our graphql endpoint
import { useQuery } from '@apollo/client';
//queries file in utils will store our queries -- it's graphQl queries that we've created to use within the application
//it's a query called allProfiles --- we can use the sandbox to create these queries and then store them in the client side of the application
import { QUERY_PROFILES } from '../utils/queries';

// on homepage, we imported the queryprofiles var, and passed it into useQuery method from apollo client
//will make the query to graphql, it will do it async and provides us w two variables, loading and data
//loading is bc it's async --- we pass loading into JSX, so that we can conditionally render something if it's loading
//or display the data if we get a response back (stored in data variable)

//When Homepage loads, it sends this query to graphQl
const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  // if we get data back, store the profiles in profiles variable
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {/* if loading, conditionally render Loading... */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
            // profiles get passed in to ProfileList component
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
