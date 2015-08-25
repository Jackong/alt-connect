# alt-connect
connect mixin for alt store

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
        //and, only this method will be called when re-render
        super.componentWillMount()//for connect listen

        //do something, it won't be called when re-render
        Actions0.get()
    }
    componentWillUnmount() {
        //required if you has componentWillUnmount
        super.componentWillUnmount()//for connect unlisten
        //do something
    }
    componentDidMount() {
        //only this method will be called when re-render
        super.componentDidMount()

        //they won't be called when re-render
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

## Features
* auto connect your stores
* auto take snapshot and restore(bootstrap) when re-render
