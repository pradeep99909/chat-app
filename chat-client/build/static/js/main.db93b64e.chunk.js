(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{108:function(e,t){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(35),r=a.n(o),c=(a(72),a(4)),i=a(5),l=a(7),p=a(6),m=a(8),h=a(3),u=a(22),d=(a(73),a(20)),g=a(10),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-option",style:{display:this.props.display,top:this.props.top?this.props.top:null,right:this.props.right?this.props.right:null,bottom:this.props.bottom?this.props.bottom:null,left:this.props.left?this.props.left:null}},this.props.options.map((function(e,t){return s.a.createElement("div",{className:"options",onClick:e.fun},s.a.createElement("i",{className:"material-icons"},e.icon),s.a.createElement("p",null,e.name))})))}}]),t}(s.a.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).display=function(){"none"===a.state.display?a.setState((function(e){return Object(h.a)({},e,{display:"block"})})):a.setState((function(e){return Object(h.a)({},e,{display:"none"})}))},a.state={display:"none"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat-header"},s.a.createElement("div",{className:"chat-header-box"},s.a.createElement("h1",null,"Chat App")),s.a.createElement("div",{className:"chat-header-box"},s.a.createElement("i",{className:"material-icons"},"search"),s.a.createElement("i",{className:"material-icons",onClick:function(){e.props.history.push("/search")}},"chat"),s.a.createElement("i",{className:"material-icons",onClick:this.display},"more_vert")),s.a.createElement(f,{display:this.state.display,top:"60px",left:"150px",options:[{name:"Settings",fun:function(){}},{name:"Logout",fun:function(){localStorage.clear(),e.props.history.push("/account/login")}}]}))}}]),t}(s.a.Component),b=Object(g.g)(y),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-top-box",style:{width:100/3+"%",height:"70px"}},s.a.createElement("i",{className:"material-icons"},this.props.name),s.a.createElement("div",{className:"bar",style:{height:this.props.height}}))}}]),t}(s.a.Component),O=(s.a.Component,a(11)),E=a.n(O),v=a(17),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat-user",onClick:function(){e.props.history.push("/chat/"+e.props.name)}},s.a.createElement("img",{alt:"user",style:{borderRadius:"100%"},width:"50",height:"50",src:"https://i.stack.imgur.com/l60Hf.png"}),s.a.createElement("div",{className:"chat-user-message"},s.a.createElement("h4",{style:{fontSize:16}},this.props.name),s.a.createElement("p",{style:{fontSize:14,textOverflow:"ellipsis",width:"100%"},className:"chat-message"},this.props.top_message)))}}]),t}(s.a.Component),w=Object(g.g)(S),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"loader",style:{width:"100%",height:"100%"}},s.a.createElement("div",{className:"load"}))}}]),t}(s.a.Component),k=a(18),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).get_messages=Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.dispatch,e.next=3,fetch("http://localhost:8000/get_messages",{method:"POST",mode:"cors",credentials:"include",headers:{Accept:"application/json","Content-Type":"text/plain",Authorization:"Brearer "+localStorage.getItem("chat-app-token")},body:JSON.stringify({uid:localStorage.getItem("chat-app-uid")})}).then((function(e){200===e.status?e.json().then((function(e){t({type:"GET_MESSAGE",payload:e.message})})):a.setState((function(e){return Object(h.a)({},e,{err:"Something went wrong. Please check your Internet connection"})}))}));case 3:case"end":return e.stop()}}),e)}))),a.get_users=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/get_message_user",{method:"post",mode:"cors",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({uid:localStorage.getItem("chat-app-uid")})}).then((function(e){return e.json().then((function(e){a.setState((function(t){return Object(h.a)({},t,{users:e})}))}))})).catch((function(e){a.setState((function(e){return Object(h.a)({},e,{err:"No Connection to Internet"})}))}));case 2:case"end":return e.stop()}}),e)}))),a.state={messages:null,users:null,err:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.get_messages();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"chat-main"},null!==this.props.messages?0!==this.props.messages.length?this.props.messages.map((function(e,t){return s.a.createElement(w,{key:t,name:e._id,top_message:"media"===e.messages[e.messages.length-1].type?e.messages[e.messages.length-1].from+" sent you an Image":"document"===e.messages[e.messages.length-1].type?e.messages[e.messages.length-1].from+" sent you an Document":e.messages[e.messages.length-1].message})})):s.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("p",{style:{color:"#838383",fontSize:14,fontFamily:"sans-serif"}},"No Conversation")):null!==this.state.err?s.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("p",{style:{color:"#838383",fontSize:14,fontFamily:"sans-serif",textAlign:"center"}},this.state.err)):s.a.createElement(x,null))}}]),t}(s.a.Component),_=Object(g.g)(Object(k.b)((function(e){return{messages:e.messages}}))(C)),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).display=function(){"none"===a.state.display?a.setState((function(e){return Object(h.a)({},e,{display:"block"})})):a.setState((function(e){return Object(h.a)({},e,{display:"none"})}))},a.back=function(){a.props.history.push("/chat")},a.state={display:"none"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-history-top"},s.a.createElement("div",{className:"overlay",style:{display:this.state.display},onClick:this.display}),window.matchMedia("(max-width: 500px)").matches?s.a.createElement("i",{className:"material-icons",onClick:this.back,style:{cursor:"pointer",width:"40px",textAlign:"center",color:"white"}},"arrow_back_ios"):null,s.a.createElement("img",{src:"https://images.unsplash.com/photo-1527980965255-d3b416303d12",style:{borderRadius:"100%",paddingLeft:window.matchMedia("(max-width: 500px)").matches?0:10},height:"50",width:"50"}),s.a.createElement("h3",{style:{color:"white",paddingLeft:10,fontFamily:"sans-serif",fontSize:18}},this.props.name),s.a.createElement("i",{className:"material-icons",style:{color:"var(--white--)",justifySelf:"flex-end",display:"flex",marginLeft:"auto",marginRight:"20px",cursor:"pointer"},onClick:this.display},"more_vert"),s.a.createElement(f,{display:this.state.display,top:"60px",right:"5px",options:[{name:"Get Info",icon:"info",fun:function(){alert("Get Info")}},{name:"Clear Chat",icon:"delete_sweep",fun:function(){alert("Clear Chats")}},{name:"Settings",icon:"settings",fun:function(){alert("Settings")}}]}))}}]),t}(s.a.Component),I=Object(g.g)(N),A=a(21),M=a(127),D=a(64),T=a.n(D)()("http://localhost:8000"),z=a(111);z.initializeApp({apiKey:"AIzaSyDZsjINu9aerw6itaCwwayaR1C7isSfKXk",authDomain:"proj1-798c4.firebaseapp.com",databaseURL:"https://proj1-798c4.firebaseio.com",projectId:"proj1-798c4",storageBucket:"proj1-798c4.appspot.com",messagingSenderId:"332847525454",appId:"1:332847525454:web:100195b9d746896c"});var G=z,L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handle=function(e){var t=e.target,n=t.name,s=t.value;a.setState((function(e){return Object(h.a)({},e,Object(A.a)({},n,s))}))},a.display=function(){"none"===a.state.display?a.setState((function(e){return Object(h.a)({},e,{display:"block"})})):a.setState((function(e){return Object(h.a)({},e,{display:"none"})}))},a.send=function(){""!==a.state.text&&(a.props.dispatch({type:"ADD_MESSAGE",payload:{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:a.props.name,message:a.state.text,type:"message",time:new Date}}),T.emit("send-message",{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:a.props.name,message:a.state.text,type:"message",time:new Date})),a.setState((function(e){return Object(h.a)({},e,{text:""})}))},a.handlepress=function(e){"Enter"===e.key&&(a.send(),a.setState((function(e){return Object(h.a)({},e,{text:""})})))},a.state={text:"",display:"none"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat-history-bottom"},s.a.createElement("div",{className:"overlay",style:{display:this.state.display},onClick:this.display}),s.a.createElement("textarea",{className:"chat-type",placeholder:"Enter Your Message...",name:"text",value:this.state.text,onChange:this.handle}),s.a.createElement(f,{display:this.state.display,bottom:"60px",right:"80px",options:[{name:"Gallery",icon:"insert_photo",fun:function(){var t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("accept","image/png, image/jpeg, image/gif, image/jpeg"),t.click();var a=e.props,n=a.dispatch,s=a.name;t.onchange=Object(v.a)(E.a.mark((function a(){var o;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=Object(M.a)(),G.storage().ref().child("/messages/"+o+"/0.jpg").put(t.files[0]),n({type:"ADD_MESSAGE",payload:{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:s,message:o,type:"media",time:new Date}}),T.emit("send-message",{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:s,message:o,type:"media",time:new Date}),e.setState((function(e){return Object(h.a)({},e,{display:"none"})}));case 6:case"end":return a.stop()}}),a)})))}},{name:"Share Location",icon:"location_on",fun:function(){var t=e.props,a=t.dispatch,n=t.name;navigator.geolocation.getCurrentPosition((function(t){a({type:"ADD_MESSAGE",payload:{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:n,type:"location",message:[t.coords.longitude,t.coords.latitude],time:new Date}}),T.emit("send-message",{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:n,type:"location",message:[t.coords.latitude,t.coords.longitude],time:new Date}),e.setState((function(e){return Object(h.a)({},e,{display:"none"})}))}))}},{name:"Document",icon:"assignment",fun:function(){var t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("accept","application/pdf,application/ods,application/pptx,application/html,application/csv,application/xlsx"),t.click();var a=e.props,n=a.dispatch,s=a.name;t.onchange=Object(v.a)(E.a.mark((function a(){var o;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=Object(M.a)(),G.storage().ref().child("/messages/"+o+"/"+t.files[0].name).put(t.files[0]),n({type:"ADD_MESSAGE",payload:{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:s,message:o,type:"document",time:new Date}}),T.emit("send-message",{uid_from:localStorage.getItem("chat-app-uid"),from:localStorage.getItem("chat-app-from"),to:s,message:o,type:"document",time:new Date}),e.setState((function(e){return Object(h.a)({},e,{display:"none"})}));case 6:case"end":return a.stop()}}),a)})))}}]}),s.a.createElement("i",{className:"material-icons material-bottom"},"keyboard_voice"),s.a.createElement("i",{onClick:this.display,className:"material-icons material-bottom"},"attach_file"),s.a.createElement("i",{onClick:this.send,className:"material-icons material-bottom"},"send"))}}]),t}(s.a.Component),F=Object(g.g)(Object(k.b)((function(e){return{messages:e.messages}}))(L)),B=a(31),J=a.n(B);a(122).config();var P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).delete_options=function(e){window.confirm("Are you sure you want to delete the message?")&&fetch("http://localhost:8000/delete_message",{method:"DELETE",credentials:"include",headers:{Accept:"application/json","Content-Type":"text/plain",Authorization:"Brearer "+localStorage.getItem("chat-app-token")},body:JSON.stringify({id:e})}).then((function(t){return t.json().then((function(t){a.props.dispatch({type:"DELETE_MESSAGE",payload:{id:e,user:a.props.to}}),a.setState((function(e){return Object(h.a)({},e,{display:"none"})}))}))}))},a.display=function(){a.setState((function(e){return Object(h.a)({},e,{display:"none"===a.state.display?"block":"none"})}))},a.state={display:"none",image:null,display_delete_option:"none"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;(this.setState((function(e){return Object(h.a)({},e,{display:"none"})})),"media"===this.props.type||"document"===this.props.type)&&G.storage().ref().child("/messages/"+decodeURI(this.props.message)+"/0.jpg").getDownloadURL().then((function(t){e.setState((function(e){return Object(h.a)({},e,{image:t})}))}))}},{key:"componentDidMount",value:function(){if("location"===this.props.type){J.a.accessToken="pk.eyJ1Ijoic2lzYXBpNzkzOSIsImEiOiJjazYwbnFjM3QwOTdkM21wa3p3MGFoODBlIn0.X0_rZjn7eQ2jIOOhqPG1AA";var e=new J.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/dark-v10",zoom:9,center:[this.props.message[1],this.props.message[0]]});(new J.a.Marker).setLngLat([this.props.message[1],this.props.message[0]]).addTo(e),e.addControl(new J.a.NavigationControl)}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat1",style:{backgroundColor:localStorage.getItem("chat-app-from")===this.props.from?"var(--blue--)":"var(--white--)",alignSelf:localStorage.getItem("chat-app-from")===this.props.from?"flex-start":"flex-end",maxWidth:"media"===this.props.type?null:"300px"}},s.a.createElement("div",{className:"chat-message-name",style:{fontFamily:"sans-serif",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"space-between"}},s.a.createElement("div",null,this.props.from),s.a.createElement("i",{className:"material-icons",onClick:this.display,style:{fontSize:18,cursor:"pointer",transform:"rotate(270deg)",alignItems:"center",padding:"2px"}},"more_vert")),"message"===this.props.type?s.a.createElement("p",{style:{fontFamily:"sans-serif",overflowWrap:"break-word",marginBlockEnd:0,marginBlockStart:0},className:"chat-message"},this.props.message):"media"===this.props.type?s.a.createElement("img",{src:this.state.image,height:"auto",width:"300",loading:"lazy",alt:"message"}):"location"===this.props.type?s.a.createElement("div",{ref:function(t){return e.mapContainer=t},style:{width:"280px",height:"150px",borderRadius:"10px"}}):"document"===this.props.type?s.a.createElement("a",{href:this.state.image,download:!0},"File"):s.a.createElement("p",{style:{fontFamily:"sans-serif",overflowWrap:"break-word",marginBlockEnd:0,marginBlockStart:0},className:"chat-message"},this.props.message),s.a.createElement("div",{className:"chat-main-option",style:{display:this.state.display,marginLeft:localStorage.getItem("chat-app-from")!==this.props.from?"0px":"150px",alignItems:localStorage.getItem("chat-app-from")!==this.props.from?"flex-start":"flex-end"}},s.a.createElement("div",{className:"option"},"Updated Message"),s.a.createElement("div",{className:"option",onClick:function(){return e.delete_options(e.props.id)}},"Delete Message")))}}]),t}(s.a.Component),R=Object(g.g)(Object(k.b)((function(e){return{messages:e.messages}}))(P)),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).get_chat_history=function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/chat_history",{method:"POST",mode:"cors",credentials:"include",headers:{Accept:"application/json","Content-Type":"text/plain",Authorization:"Brearer "+localStorage.getItem("chat-app-token")},body:JSON.stringify({uid:localStorage.getItem("chat-app-uid"),to:t})}).then((function(e){return e.json()})).then((function(e){e.success?a.props.dispatch({type:"GET_MESSAGE",payload:e.message}):a.setState((function(t){return Object(h.a)({},t,{error:e.message})}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.get_chat_history_socket=function(){},a.componentWillMount=function(){},a.state={messages:null,error:"",display:"none"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.on(localStorage.getItem("chat-app-uid"),(function(t){e.props.dispatch({type:"ADD_MESSAGE",payload:t})}))}},{key:"componentDidUpdate",value:function(e){this.props.messages,e.messages;var t=document.getElementById("chat-history");t.scrollTop=t.scrollHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat-history-main",id:"chat-history"},null!==this.props.messages?this.props.messages.filter((function(t){if(t._id===e.props.to)return t})).map((function(t){return t.messages.map((function(t,a){return s.a.createElement(R,{key:a,to:e.props.to,from:t.from,message:t.message,type:t.type,time:t.time,id:t._id})}))})):s.a.createElement(x,null))}}]),t}(s.a.Component),W=Object(g.g)(Object(k.b)((function(e){return Object(h.a)({},e,{messages:e.messages})}))(U)),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-history",style:{width:"100%",height:"100%"}},s.a.createElement(I,{name:this.props.match.params.user}),s.a.createElement(W,{to:this.props.match.params.user}),s.a.createElement(F,{name:this.props.match.params.user,uid_to:this.props.match.params.user}))}}]),t}(s.a.Component),X=Object(g.g)(H),K=a(66),Y=a.n(K),Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("img",{src:Y.a,width:"300",height:"300",style:{backdropFilter:"red"}})}}]),t}(s.a.Component),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).search=function(e){fetch("http://localhost:8000/user_search",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({user:e})}).then((function(e){return e.json().then((function(e){a.setState((function(t){return Object(h.a)({},t,{search:e.people[0].users})}))}))}))},a.handle=function(e){var t=e.target,n=t.value,s=t.name;a.setState((function(e){return Object(h.a)({},e,Object(A.a)({},s,n))})),a.search(a.state.input)},a.state={input:"",search:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-serach-new"},s.a.createElement("input",{type:"text",name:"input",placeholder:"Enter Username",onChange:this.handle}),s.a.createElement("div",{className:"chat-search-main"},null!==this.state.search?this.state.search.map((function(e,t){return s.a.createElement(w,{name:e.username,top_message:null})})):null))}}]),t}(s.a.Component),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("chat-app-isLogined")||this.props.history.push("/account/login")}},{key:"render",value:function(){return s.a.createElement("div",{className:"chat"},s.a.createElement("div",{className:"chat-left",style:{width:"/chat"!==this.props.location.pathname&&"/search"!==this.props.location.pathname||!window.matchMedia("(max-width: 500px)").matches?this.props.match.params.user&&window.matchMedia("(max-width: 500px)").matches?"0%":"30%":"100%",display:("/chat"!==this.props.location.pathname&&"/search"!==this.props.location.pathname||!window.matchMedia("(max-width: 500px)").matches)&&this.props.match.params.user&&window.matchMedia("(max-width: 500px)").matches?"none":"block"}},s.a.createElement(b,null),s.a.createElement(g.d,null,s.a.createElement(g.b,{path:"/chat",component:_,exact:!0}),s.a.createElement(g.b,{path:"/chat/:user",component:_,exact:!0}),s.a.createElement(g.b,{path:"/search",component:q,exact:!0}))),s.a.createElement("div",{className:"chat-right",style:{width:"/chat"!==this.props.location.pathname&&"/search"!==this.props.location.pathname||!window.matchMedia("(max-width: 500px)").matches?this.props.match.params.user&&window.matchMedia("(max-width: 500px)").matches?"100%":"70%":"0%",display:"/chat"!==this.props.location.pathname&&"/search"!==this.props.location.pathname||!window.matchMedia("(max-width: 500px)").matches?(this.props.match.params.user&&window.matchMedia("(max-width: 500px)").matches,"flex"):"none",justifyContent:"center",alignItems:"center"}},s.a.createElement(g.d,null,s.a.createElement(g.b,{path:"/search",component:Z,exact:!0}),s.a.createElement(g.b,{path:"/chat/:user",component:X,exact:!0}),s.a.createElement(g.b,{component:Z}))))}}]),t}(s.a.Component),V=a(14),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).login=function(e){e.preventDefault(),""!==a.state.email&&""!==a.state.password&&(a.setState((function(e){return Object(h.a)({},e,{error:"",loading:!0})})),fetch("http://localhost:8000/auth_login",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then((function(e){e.json().then((function(e){e.success?(localStorage.setItem("chat-app-from",e.username),localStorage.setItem("chat-app-uid",e.uid),localStorage.setItem("chat-app-token",e.token),localStorage.setItem("chat-app-isLogined",!0),a.props.history.push("/chat")):a.setState((function(t){return Object(h.a)({},t,{error:e.message,loading:!1})}))}))})))},a.handle=function(e){var t=e.target,n=t.name,s=t.value;a.setState((function(e){return Object(h.a)({},e,Object(A.a)({},n,s))}))},a.state={email:"",password:"",error:"",loading:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-login-main"},s.a.createElement("h3",null,"Login"),s.a.createElement("form",null,s.a.createElement("input",{type:"email",placeholder:"Email",name:"email",onChange:this.handle}),s.a.createElement("input",{type:"password",placeholder:"Password",name:"password",onChange:this.handle}),s.a.createElement("button",{onClick:this.login},this.state.loading?s.a.createElement("div",{className:"load"}):null,"\xa0Login"),s.a.createElement("p",{style:{alignSelf:"flex-start",fontFamily:"sans-serif",color:"red",fontSize:14}},this.state.error)),s.a.createElement(d.b,{style:{color:"var(--blue--)"},to:"/account/register"},"Register?"))}}]),t}(s.a.Component),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).login=function(e){e.preventDefault(),""!==a.state.email&&""!==a.state.password&&(a.setState((function(e){return Object(h.a)({},e,{error:"",loading:!0})})),fetch("http://localhost:8000/auth_register",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify({username:a.state.username,email:a.state.email,password:a.state.password})}).then((function(e){e.json().then((function(e){e.success?(localStorage.setItem("chat-app-from",e.from),localStorage.setItem("chat-app-uid",e.uid),localStorage.setItem("chat-app-token",e.token),localStorage.setItem("chat-app-isLogined",!0),a.props.history.push("/chat")):a.setState((function(t){return Object(h.a)({},t,{error:e.message,loading:!1})}))}))})))},a.handle=function(e){var t=e.target,n=t.name,s=t.value;a.setState((function(e){return Object(h.a)({},e,Object(A.a)({},n,s))}))},a.state={username:"",email:"",password:"",error:"",loading:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-login-main"},s.a.createElement("h3",null,"Register"),s.a.createElement("form",null,s.a.createElement("input",{type:"text",placeholder:"Username",name:"username",onChange:this.handle}),s.a.createElement("input",{type:"email",placeholder:"Email",name:"email",onChange:this.handle}),s.a.createElement("input",{type:"password",placeholder:"Password",name:"password",onChange:this.handle}),s.a.createElement("button",{onClick:this.login},this.state.loading?s.a.createElement("div",{className:"load"}):null,"\xa0Register"),s.a.createElement("p",{style:{alignSelf:"flex-start",fontFamily:"sans-serif",color:"red",fontSize:14}},this.state.error)))}}]),t}(s.a.Component),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-auth"},s.a.createElement("h3",null,"Chat App"),s.a.createElement(g.d,null,s.a.createElement(g.b,{path:"/account/login",component:$,exact:!0}),s.a.createElement(g.b,{path:"/account/register",component:ee,exact:!0})))}}]),t}(s.a.Component),ae=Object(g.g)(te),ne=a(47),se=a.n(ne);var oe=function(e,t){for(var a=0;a<e.length;a++)if(e[a]._id===t)return a;return!1},re=a(37),ce={messages:null},ie=Object(re.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var a=e.messages.length,n=se()(e,t.payload.to===localStorage.getItem("chat-app-from")?t.payload.from:t.payload.to);if(!1!==n){var s=[].concat(Object(u.a)(e.messages[n].messages),[t.payload]),o={_id:e.messages[n]._id,messages:s},r=e.messages.slice(0,n),c=e.messages.slice(n+1,a);return Object(h.a)({},e,{messages:[o].concat(Object(u.a)(r),Object(u.a)(c))})}var i=Object(u.a)(e.messages),l=[t.payload],p={_id:t.payload.to===localStorage.getItem("chat-app-from")?t.payload.from:t.payload.to,messages:l};return Object(h.a)({},e,{messages:[p].concat(Object(u.a)(i))});case"GET_MESSAGE":return Object(h.a)({},e,{messages:t.payload});case"SET_MESSAGE":return Object(h.a)({},e,{messages:null});case"DELETE_MESSAGE":var m=se()(e,t.payload.user),d=oe(e.messages[m].messages,t.payload.id);return e.messages[m].messages=[].concat(Object(u.a)(e.messages[m].messages.slice(0,d)),Object(u.a)(e.messages[m].messages.slice(d+1,e.messages[m].messages.length))),console.log(e.messages[m].messages.slice(0,d)),Object(h.a)({},e,{messages:Object(u.a)(e.messages)});default:return e}})),le=Object(V.a)(),pe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,{history:le},s.a.createElement(k.a,{store:ie},s.a.createElement("div",{className:"App"},s.a.createElement(g.a,{from:"/",to:"/chat"}),s.a.createElement(g.b,{path:"/account/login",component:ae,exact:!0}),s.a.createElement(g.b,{path:"/account/register",component:ae,exact:!0}),s.a.createElement(g.b,{path:"/chat",component:Q},s.a.createElement(g.b,{path:"/:user",component:Q})),s.a.createElement(g.b,{path:"/search",component:Q}))))}}]),t}(s.a.Component);function me(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(t),n=new Uint8Array(a.length),s=0;s<a.length;++s)n[s]=a.charCodeAt(s);return n}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(){return(he=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return Notification.requestPermission(),e.next=4,navigator.serviceWorker.register("/service-worker.js",{scope:"/"}).then(function(){var e=Object(v.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.active){e.next=5;break}return e.next=3,PushManager.subscribe({userVisibilityOnly:!0,applicationServerKey:me("BHzautfuAhAjFSZz20G7SHZa3K_-T2jsy8F5IDdk0vMVn3UNFxtmqRrh5ABeajp2L5X72Im6SAoeXbmHnSwxJCY")});case 3:a=e.sent,fetch("http://localhost:8000/subscribe",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"text/plain"},body:JSON.stringify(a)});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.render(s.a.createElement(pe,null),document.getElementById("root")),function(e){he.apply(this,arguments)}()},47:function(e,t){e.exports=function(e,t){for(var a=0;a<e.messages.length;a++)if(e.messages[a]._id===t)return a;return!1}},66:function(e,t,a){e.exports=a.p+"static/media/empty_inbox.27b4fca7.png"},67:function(e,t,a){e.exports=a(125)},72:function(e,t,a){},73:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.db93b64e.chunk.js.map