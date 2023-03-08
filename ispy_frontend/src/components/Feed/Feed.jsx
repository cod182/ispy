import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../../client';
import { feedQuery, searchQuery } from '../../utils/data';
import { MasonryLayout, Spinner } from '../index';

const Feed = ({}) => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
        console.log('1');
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading) return <Spinner message="New Posts Incoming!" />;
  if (!pins?.length) {
    return <h2>No pins available</h2>;
  }
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
