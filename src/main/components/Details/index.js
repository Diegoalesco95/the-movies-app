import React from 'react';
import {View, Text, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles} from './styles';
import {makeHtml} from '../../../utils/makeHtml';

export const Details = ({
  medium_cover_image,
  title,
  description_full,
  yt_trailer_code,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.details}>
          <Image style={styles.cover} source={{uri: medium_cover_image}} />
          <Text style={styles.description}>{description_full}</Text>
        </View>
        {yt_trailer_code ? (
          <View style={styles.trailer}>
            <WebView source={{html: makeHtml(yt_trailer_code)}} />
          </View>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};
