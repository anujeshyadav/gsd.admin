(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[241],{2164:function(e,a,t){"use strict";t.r(a);var i=t(9),r=t(10),n=t(12),l=t(11),c=t(0),s=t.n(c),o=t(809),d=t(812),u=t(805),m=t(583),g=t(579),f=t(145),h=t(819),p=t(189),v=t(821),S=t(102),b=t(319),w=t(450),z=t(273),E=t(43),N=t.n(E),C=(t(820),t(101)),P=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Name",field:"firstname",width:175,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Operator",field:"Operator",width:175,filter:!0},{headerName:"Date",field:"Date",filter:!0,width:250},{headerName:"City",field:"City",filter:!0,width:150},{headerName:"Amount",field:"Amount",filter:!0,width:150},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Active"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Inactive"===e.value?s.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:function(e){return s.a.createElement("div",{className:"actions cursor-pointer"},s.a.createElement(b.a,{className:"mr-50",size:20}),s.a.createElement(w.a,{size:20}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/api/aggrid/data").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,r=a.defaultColDef;return s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,{breadCrumbTitle:"Cable Tv",breadCrumbActive:"Cable Tv"}),s.a.createElement(o.a,{className:"overflow-hidden agGrid-card"},s.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(u.a,{className:"p-1 ag-dropdown"},s.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(z.a,{className:"ml-50",size:15})),s.a.createElement(g.a,{right:!0},s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(f.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(h.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(p.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(S.a.Consumer,null,(function(a){return s.a.createElement(v.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(s.a.Component);a.default=P}}]);
//# sourceMappingURL=241.b7962b54.chunk.js.map