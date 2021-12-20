import * as React from 'react';

import { Text } from 'react-native-paper';

interface TextProps {
  style?: object
}

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

MonoText.defaultProps = {
  style: null
}