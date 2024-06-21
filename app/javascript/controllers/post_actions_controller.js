import ApplicationController from "controllers/application_controller"

export default class extends ApplicationController {
  connect () {
    super.connect()
  }

  // beforeComplete(element, reflex, noop, id) {
  //  console.log("before complete", element, reflex, id)
  // }

  // completeQueued(element, reflex, noop, id) {
  //   console.log("complete enqueued for delivery upon connection", element, reflex, id)
  // }

  // completeDelivered(element, reflex, noop, id) {
  //   console.log("complete delivered to the server", element, reflex, id)
  // }

  // completeSuccess(element, reflex, noop, id) {
  //   console.log("complete successfully executed", element, reflex, id)
  // }

  // completeError(element, reflex, error, id) {
  //   console.error("complete server-side error", element, reflex, error, id)
  // }

  // completeHalted(element, reflex, noop, id) {
  //   console.warn("complete halted before execution", element, reflex, id)
  // }

  // completeForbidden(element, reflex, noop, id) {
  //   console.warn("complete forbidden from executing", element, reflex, id)
  // }

  // afterComplete(element, reflex, noop, id) {
  //   console.log("complete has been executed by the server", element, reflex, id)
  // }

  // finalizeComplete(element, reflex, noop, id) {
  //   console.log("complete changes have been applied", element, reflex, id)
  // }
}
