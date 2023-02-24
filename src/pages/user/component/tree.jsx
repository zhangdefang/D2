import React from 'react';
import routers from '../../../router'
import store from '../../../store'
import { treeAction } from '../../../store/actionCreators'

import { Tree, Input } from 'antd';

const { Search } = Input;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList = [];
const generateList = data => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(gData);

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

class Trees extends React.Component {
  constructor(props) {
    super(props)
    const storeState = store.getState()
    this.state = {
      expandedKeys: [],
      searchValue: '',
      autoExpandParent: true,
      treeData: routers,
      node: storeState.node
    }
    store.subscribe(() => {
      this.setState({
        node: store.getState().node
      })
    })
  }


  onExpand = expandedKeys => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onChange = e => {
    const { value } = e.target;
    const expandedKeys = dataList
      .map(item => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, gData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      expandedKeys,
      searchValue: value,
    });
  };

  onSelect = (selectKey, e) => {
    const { describe, email, fatherNode, key, icon, sord, type, afterStr } = e.node
    const des = {
      describe,
      email,
      fatherNode,
      key,
      icon,
      sord,
      type,
      afterStr
    }
    const action = treeAction(des)
    store.dispatch(action)
  }

  render() {
    const { searchValue, treeData } = this.state;
    const loop = data =>
      data.map(item => {
        const index = item.title.indexOf(searchValue);
        const beforeStr = item.title.substring(0, index);
        const afterStr = item.title.slice(index + searchValue.length);
        const icon = item.icon;
        const fatherNode = item.fatherNode;
        const email = item.email;
        const type = item.type;
        const sord = item.sord;
        const describe = item.describe;
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{item.title}</span>
          );
        if (item.children) {
          return {
            title,
            key: item.key,
            afterStr,
            icon,
            fatherNode,
            email,
            type,
            sord,
            describe, 
            children: loop(item.children)
          };
        }

        return {
          title,
          key: item.key,
          afterStr,
          icon,
          fatherNode,
          email,
          type,
          sord,
          describe,
        };
      });
    return (
      <div>
        <Search style={{ marginBottom: 8 }} placeholder="请输入关键字进行过滤" onChange={this.onChange} />
        <Tree
          className='tree_style'
          onExpand={this.onExpand}
          treeData={loop(treeData)}
          onSelect={this.onSelect}
          defaultExpandAll
        />
      </div>
    );
  }
}

export default Trees;