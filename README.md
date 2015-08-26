# alt-connect
connect mixin for alt store

## Features
* auto connect your stores

## Examples
```js
import React, { PropTypes } from 'react'
import mixin from 'es6-react-mixins'
import connect from 'alt-connect'

class App extends mixin(connect(Store1, Store2)) {
    constructor(props) {
        super(props)//required if you has constructor
    }
    componentWillMount() {
        //required if you has componentWillMount
        super.componentWillMount()//for connect listen

        //do something
        Actions0.get()
    }
    componentWillUnmount() {
        //required if you has componentWillUnmount
        super.componentWillUnmount()//for connect unlisten
        //do something
    }
    componentDidMount() {
        super.componentDidMount()

        Actions1.get()
        Actions2.get();
    }
    render () {
        return (
            <div>app</div>
        )
    }
}

export default App;
```
