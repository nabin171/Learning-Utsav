import React from 'react'

const Parent = () => {
  return (
    <div>
        <h2>This is parent</h2>
        <Child1 chocolate={"ram"} name={"Updork"}/>
         
    </div>
  )
}

const Child1 = (props) => {

  return (
    <div>
      <h4>meet with {props.chocolate}</h4>
      Hello world from child1
      <Child2 takename={props.name} />
    </div>
  );
}

const Child2 = (props) => {

  return (
    <div>
     upwork
     {props.takename}
    </div>
  );

}
export default Parent