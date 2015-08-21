export default (...stores) => {
    return base => (
            class Connect extends base {
                constructor(props) {
                    super(props)
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
                }
                componentWillMount() {
                    super.componentWillMount()
                    this.listeners = stores.map(store => store.listen(this.setState.bind(this)))
                }
                componentWillUnmount() {
                    this.listeners.map(unlisten => unlisten());
                    super.componentWillUnmount()
                }
            }
        )
}
