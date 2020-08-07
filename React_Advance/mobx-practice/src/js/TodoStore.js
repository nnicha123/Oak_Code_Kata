import { observable } from "mobx"
class TodoStore {
  @observable todos = ["buy milk", "buy eggs"]
  @observable filter = ""
}
export default TodoStore