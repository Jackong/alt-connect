export default (...stores) => {
    return base => (
            class Connect extends base {
                constructor(props) {
                    super(props)
                    this.state = {}
                    this.listeners = []
                }
                componentWillMount() {
                    super.componentWillMount()
                    if (stores.length === 0) {
                        return
                    }
                    this.listeners = stores.map(store => {
                        let states = store.getState()
                        for (var key in states) {
                            if (!states.hasOwnProperty(key)) {
                                continue
                            }
                            this.state[key] = states[key]
                        }
                        return store.listen(this.setState.bind(this))
                    })
                }
                componentWillUnmount() {
                    this.listeners.map(unlisten => unlisten())
                    super.componentWillUnmount()
                }
            }
        )
}
