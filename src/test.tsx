import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
  <form method="post">
    <button type="submit">submit</button>
    <label htmlfor="name">Name</label>
    <input type="text" id="name" name="name" />
  </form>
  )
})
app.post('/', async (c) => {
  const body = await c.req.formData()
  const name = String(body.get('name'))
  return c.text(name)
})



export default app
