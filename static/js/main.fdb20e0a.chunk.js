(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),o=(n(13),n(8)),i=n(2),b=n(3),d=n(5),u=n(4),j=n(0),l=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Good: ",this.props.good]}),Object(j.jsxs)("p",{children:["Neutral: ",this.props.neutral]}),Object(j.jsxs)("p",{children:["Bad: ",this.props.bad]}),Object(j.jsxs)("p",{children:["Total: ",this.props.total]}),Object(j.jsxs)("p",{children:["Positive feedback: ",this.props.positive,"%"]})]})}}]),n}(c.a.Component),h=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.options);return Object(j.jsx)(j.Fragment,{children:t.map((function(t){return Object(j.jsx)("button",{type:"button",name:t,onClick:e.props.onLeaveFeedback,children:t[0].toUpperCase()+t.slice(1)},t)}))})}}]),n}(c.a.Component),p=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),n]})},O=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})},v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/(e.state.good+e.state.neutral+e.state.bad))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:this.state,onLeaveFeedback:this.handleLeaveFeedback})}),Object(j.jsx)(p,{title:"Statistics",children:this.countTotalFeedback()?Object(j.jsx)(l,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positive:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(O,{message:"No feedback given"})})]})}}]),n}(c.a.Component);n(15);var f=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(v,{})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fdb20e0a.chunk.js.map