import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Align from '@/components/Align'
import AlignContent from '@/components/AlignContent'
import DType from '@/components/DType'
import Fluid from '@/components/Fluid'
import GridList from '@/components/GridList'
import Justify from '@/components/Justify'
import RowColumn from '@/components/RowColumn'
import Wrap from '@/components/Wrap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.ROOT_BASE,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/align',
      component: Align
    },
    {
      path: '/alignContent',
      component: AlignContent
    },
    {
      path: '/dType',
      component: DType
    },
    {
      path: '/fluid',
      component: Fluid
    },
    {
      path: '/gridList',
      component: GridList
    },
    {
      path: '/justify',
      component: Justify
    },
    {
      path: '/rowcolumn',
      component: RowColumn
    },
    {
      path: '/wrap',
      component: Wrap
    }
  ]
})
