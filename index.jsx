export default (...stores) => {
    let snapshots = {}

    return base => (
            class Connect extends base {
                constructor(props) {
                    super(props)
                    //listen
                    this.state = {}
                    stores.map(store => {
                        let states = store.getState()
                        for (var key in states) {
                            if (!states.hasOwnProperty(key)) {
                                continue
                            }
                            this.state[key] = states[key]
                        }
                    })
                    this.listeners = stores.map(store => store.listen(this.setState.bind(this)))

                    //bootstrap
                    this.hash = location.hash
                    if (snapshots.hasOwnProperty(this.hash)) {
                        alt.bootstrap(snapshots[this.hash])
                        if (/super.?\..?componentWillMount.?\(.?\)/.exec(this.componentWillMount.toString())) {
                            this.componentWillMount = () => {
                                super.componentWillMount()
                            }
                        }
                        if (/super.?\..?componentDidMount.?\(.?\)/.exec(this.componentDidMount.toString())) {
                            this.componentDidMount = () => {
                                super.componentDidMount()
                            }
                        }
                    }
                }
                componentWillUnmount() {
                    //unlisten
                    this.listeners.map(unlisten => unlisten());

                    //take snapshot
                    snapshots[this.hash] = alt.takeSnapshot(...stores)
                    super.componentWillUnmount()
                }
            }
        )
}
