(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{276:function(e,t,a){e.exports=a(570)},281:function(e,t,a){},283:function(e,t,a){},570:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(17),c=a.n(o),r=(a(281),a(36)),l=a(37),s=a(39),d=a(38),h=a(40),u=(a(283),a(18)),m=a(571),v=a(199),b=a(196),g=a.n(b),p=function(e){return i.a.createElement("div",{style:Object(v.a)({},e.style,{margin:16})},i.a.createElement(u.b,null,i.a.createElement(u.c,null,i.a.createElement(u.i,{variant:"headline",component:"h2"},i.a.createElement(g.a,{clamp:4},e.text)))))},f="https://flask-service-bd2.herokuapp.com",y={"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},E={blocks:[{key:"4r5r7",text:"Digite aqui o seu text",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}],entityMap:{}},j=a(30),C={width:"100vw",height:"80vh",display:"flex",justifyContent:"center",alignItems:"center"},O=function(e){return i.a.createElement("div",{style:C},i.a.createElement(u.d,{variant:"indeterminate"}))},S=function(e){return i.a.createElement(u.g,{elevation:1},i.a.createElement(u.i,{variant:"h5",component:"h3"},e.title),i.a.createElement(u.i,{component:"p"},e.message))},k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={data:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(f,{headers:y}).then(function(t){t.json().then(function(t){e.setState({data:t.hits})})})}},{key:"render",value:function(){var e=this.state.data,t=e&&e.hits;console.log(t),console.log(e);var a=t&&e.hits.length&&e.hits.map(function(e){return i.a.createElement(u.f,{style:{width:"auto"},key:e._id},i.a.createElement(m.a,{to:"/edit/".concat(e._id),style:{textDecoration:"none"}},i.a.createElement(p,{text:e._source.title})))})||i.a.createElement(S,{title:"It is empty D:",message:"Click on Blue button to add a new paper"});return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("div",{style:C},i.a.createElement(u.e,{cellHeight:200,cols:4,spacing:8},a))||i.a.createElement(O,null))}}]),t}(i.a.Component),w={width:"100vw",display:"flex",justifyContent:"center",marginTop:50},T=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:w},i.a.createElement(m.a,{to:"".concat("/TrabalhoBD2","/add"),style:{textDecoration:"none"}},i.a.createElement(u.a,{variant:"contained",color:"primary",size:"large"},"Add"))),i.a.createElement(k,null))}}]),t}(n.Component),x=a(20);a(195);var D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={editorState:Object(j.editorStateFromRaw)(E),title:""},a.onClickSave=a.onClickSave.bind(Object(x.a)(Object(x.a)(a))),a.onChange=a.onChange.bind(Object(x.a)(Object(x.a)(a))),a.onChangeTitle=a.onChangeTitle.bind(Object(x.a)(Object(x.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({editorState:e})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onClickSave",value:function(){var e=this.state,t=e.title,a=e.editorState,n=JSON.stringify({title:t,content:Object(j.editorStateToJSON)(a)});fetch(f,{method:"POST",body:n,headers:y}).then(function(e){e.ok?alert("succes"):alert("ruim")})}},{key:"onEditorStateChange",value:function(e){this.setState({editorState:e})}},{key:"render",value:function(){return i.a.createElement("div",{style:{width:500,margin:"auto",padding:50}},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:50}},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement(m.a,{to:"".concat("/TrabalhoBD2","/"),style:{textDecoration:"none",color:"black"}},"BACK")),i.a.createElement(u.h,{required:!0,label:"Title",defaultValue:"Title",variant:"outlined",onChange:this.onChangeTitle}),i.a.createElement(u.a,{variant:"outlined",onClick:this.onClickSave},"SAVE")),i.a.createElement(j.MegadraftEditor,{editorState:this.state.editorState,onChange:this.onChange}))}}]),t}(n.Component);a(195);var B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={editorState:Object(j.editorStateFromRaw)(E),title:"title"},a.onClickSave=a.onClickSave.bind(Object(x.a)(Object(x.a)(a))),a.onChange=a.onChange.bind(Object(x.a)(Object(x.a)(a))),a.onChangeTitle=a.onChangeTitle.bind(Object(x.a)(Object(x.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("".concat(f,"/?id=").concat(t),{headers:y}).then(function(t){t.json().then(function(t){var a=t._source;e.setState({editorState:Object(j.editorStateFromRaw)(JSON.parse(a.content)),title:a.title})})})}},{key:"onChange",value:function(e){this.setState({editorState:e})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onClickSave",value:function(){var e=this.state,t=e.title,a=e.editorState,n=this.props.match.params.id,i=JSON.stringify({title:t,content:Object(j.editorStateToJSON)(a)});fetch("".concat(f,"/?id=").concat(n),{method:"PUT",body:i,headers:y})}},{key:"onEditorStateChange",value:function(e){this.setState({editorState:e})}},{key:"render",value:function(){var e=this.state.title;return i.a.createElement("div",{style:{width:500,margin:"auto",padding:50}},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:50}},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement(m.a,{to:"".concat("/TrabalhoBD2","/"),style:{textDecoration:"none",color:"black"}},"BACK")),i.a.createElement(u.h,{required:!0,label:"Title",value:e,variant:"outlined",onChange:this.onChangeTitle}),i.a.createElement(u.a,{variant:"outlined",onClick:this.onClickSave},"SAVE")),i.a.createElement(j.MegadraftEditor,{editorState:this.state.editorState,onChange:this.onChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(572),J=a(574),M=a(573);c.a.render(i.a.createElement(A.a,null,i.a.createElement(J.a,null,i.a.createElement(M.a,{path:"".concat("/TrabalhoBD2","/"),exact:!0,component:T}),i.a.createElement(M.a,{path:"".concat("/TrabalhoBD2","/add"),component:D}),i.a.createElement(M.a,{path:"".concat("/TrabalhoBD2","/edit/:id"),component:B}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[276,2,1]]]);
//# sourceMappingURL=main.266caad3.chunk.js.map