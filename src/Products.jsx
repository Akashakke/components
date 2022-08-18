import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Products() {
  return (
    <div id="wrapper">
      <Sidebar/> 
      <div id="content-wrapper" class="d-flex flex-column">
<div id="content">
  <Topbar/> 
    <div>Products</div>
    </div>
    </div>
    </div>
  )
}

export default Products