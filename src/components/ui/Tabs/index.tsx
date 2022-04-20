import { Button } from "..";
import { Children, cloneElement, isValidElement, useLayoutEffect, useState } from 'react';
import { TabGroupStyle, TabHeaderStyle, TabItemLabel, TabItemStyle, TabPanelStyle } from "./style";
import { IconLabelType, TabContentType, TabGroupProps, TabHeaderType, TabItemProps, TabPanelProps } from "./types";
import { useSpring } from "@react-spring/web";
 
const Item = ({
  icon,
  label,
  tabKey,
  onChange,
  activeTab,
  tabPosition,
  ...rest
}: TabItemProps): JSX.Element => {
  let startElement = null;
  let endElement = null;

  if (icon) {
    if (isValidElement(icon)) {
      startElement = icon;
    } else {
      const parsedIcon = icon as IconLabelType;
      if (parsedIcon.start) startElement = parsedIcon.start;
      if (parsedIcon.end) endElement = parsedIcon.end;
    }
  }

  return(
    <TabItemStyle
      $position={tabPosition || 'top'}
      $isActive={activeTab === tabKey}
      {...rest}
    >
      <Button
        block
        type="unstyled"
        variant="text"
        onClick={() => onChange && onChange(tabKey)}
        style={{ display: 'flex', justifyContent: 'start' }}
      >
        {startElement}
        <TabItemLabel>{label}</TabItemLabel>
        {endElement}
      </Button>
    </TabItemStyle>
  );
};

const Panel = ({ children, activeTab, tabKey, style, ...rest }: TabPanelProps): JSX.Element => {
  const isActive = activeTab === tabKey;
  const [hidden, setHidden] = useState(!isActive);
  
  const animationStyle = useSpring({
    to: { opacity: isActive ? 1 : 0, left: isActive ? 0 : -10 },
    config: { duration: 250 },
    // This delay makes sure that this tab waits until the last tab fades out
    delay: isActive ? 300 : 0,
    // On start, the tab must be shown to see the transition, then check if hide or not
    onStart: () => setHidden(false),
    onRest: () => setHidden(!isActive),
  })

  return (
    <TabPanelStyle
      $isActive={isActive}
      hidden={hidden}
      style={{ ...style, ...animationStyle }}
      {...rest}
    >
      {children}
    </TabPanelStyle>
  );
};

const Group = ({
  onChange,
  children,
  alignment = 'left',
  initialActiveTab,
  forcedTab,
  tabPosition = 'top',
  ...rest
}: TabGroupProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(forcedTab || initialActiveTab);
  const onChangeItem = (key: string) => setActiveTab(key);

  useLayoutEffect(() => { if(onChange) onChange(activeTab); }, [activeTab]);
  useLayoutEffect(() => { 
    if (onChange) onChange(forcedTab);
    if(forcedTab) setActiveTab(forcedTab);
  }, [forcedTab]);

  const headers: TabHeaderType = [];
  const contents: TabContentType = [];

  // Separate the tab selections and the content inside each tab into separate arrays
  Children.forEach(children, (child) => {
    if (child) {
      const content = child.props.children;
      const key = child.props.tabKey;
      headers.push(cloneElement(child, { activeTab, onChange: onChangeItem, children: null, key, tabPosition }));
      contents.push({ item: content, key });
    }
  });

  return (
    <TabGroupStyle
      $position={tabPosition}
      {...rest}
    >
      <TabHeaderStyle $alignment={alignment} $position={tabPosition}>
        {headers}
      </TabHeaderStyle>

      {contents.map(({ item, key }) => (
        <Panel
          tabKey={key}
          key={key}
          activeTab={activeTab}
        >
          {item}
        </Panel>
      ))}
    </TabGroupStyle>
  );
};

const Tab = { Group, Item };

export { Tab };