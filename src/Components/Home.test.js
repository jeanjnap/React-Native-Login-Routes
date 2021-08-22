const Home = require("./Home")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Home.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleBackButton", () => {
    let inst

    beforeEach(() => {
        inst = new Home.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleBackButton()
        }
    
        expect(callFunction).not.toThrow()
    })
})
