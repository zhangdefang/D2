import {
    ADD_NUMBER,
    SUB_NUMBER,
    TREE_NODE
  } from './constants.js'
  
  const addAction = (count) => ({
    type: ADD_NUMBER,
    num: count
  });
  
  const subAction = (count) => ({
    type: SUB_NUMBER,
    num: count
  })

  const treeAction = (count) => ({
    type: TREE_NODE,
    node: count
  })
  
  export {
    addAction,
    subAction,
    treeAction
  }