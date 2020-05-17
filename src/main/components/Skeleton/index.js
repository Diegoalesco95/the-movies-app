import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ScrollView, StyleSheet} from 'react-native';
import {Separator} from '../Separator';

export const CaterorySkeleton = () => {
  return (
    <ScrollView style={styles.container} horizontal>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={250} height={100} borderRadius={5} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <Separator />
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={250} height={100} borderRadius={5} />
          <SkeletonPlaceholder.Item marginLeft={20} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

export const SuggestionSkeleton = () => {
  return (
    <ScrollView style={styles.container}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
          <SkeletonPlaceholder.Item width={100} height={150} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item
              width={120}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={80}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={40}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <Separator direction="vertical" />
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
          <SkeletonPlaceholder.Item width={100} height={150} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item
              width={120}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={80}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={6}
              width={40}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
