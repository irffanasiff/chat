import React, { useState } from 'react';
import ReactXnft, { Text, View, useMetadata } from 'react-xnft';

ReactXnft.events.on('connect', () => {
  // no-op
});

export function App() {
  const [name, setName] = useState();
  const metaData = useMetadata();
  return (
    <View tw="p-2 flex">
      <Text>gm @{metaData.username} 👋🏻</Text>
    </View>
  );
}
