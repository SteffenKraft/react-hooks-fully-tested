import React, { useEffect, useState } from 'react';

function Blog() {
  const [selectedResource, setSelectedResource] = useState(() => 'Posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/${selectedResource}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [selectedResource]);

  const handleResourceChange = (resource) => setSelectedResource(resource);

  return (
    <>
      <button onClick={() => handleResourceChange('Posts')}>Posts</button>
      <button onClick={() => handleResourceChange('Users')}>Users</button>
      <button onClick={() => handleResourceChange('Comments')}>Comments</button>
      <h2>{selectedResource}</h2>
      {items.map((item) => (
        <p key={item.id}>{JSON.stringify(item)}</p>
      ))}
    </>
  );
}

export default Blog;
