const heading= React.createElement('h1',{},"hello world fom react");
const root = ReactDOM.createRoot(document.getElementById('root'));


const ele1 = React.createElement('div',{id:'parent'},
  React.createElement('div',{id:'inner-div'},[
    React.createElement('h1',{id:'child1'},"Holla , m child one"),
    React.createElement('h2',{id:'child2'},"Holla , m child two")
  ]),
);
root.render(ele1);