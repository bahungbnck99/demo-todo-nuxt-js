export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('post', msg => console.log(`post ${msg}!`))
}
