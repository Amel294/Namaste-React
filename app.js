const parent = React.createElement("div" , {id:"parent"} , React.createElement("div",{id:"child"},React.createElement
("h1",{},"I am an h1")) )


const heading = React.createElement("h1", 
{id:"heading"},
 "Hello world form react");
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)