import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const TodoPaneTab = () => <Text>TodoPane</Text>;

const TaskPaneTab = () => <Text>TaskPane</Text>;


const HomeScreen = (context) => {
  const { state: { index }, config, actions } = context;
  const routes = config.tabs;

  const renderScene = BottomNavigation.SceneMap({
    TodoPane: TodoPaneTab,
    TaskPane: TaskPaneTab,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={(index) => actions.setIndex(index)}
      renderScene={renderScene}
    />
  );
};

export default HomeScreen;