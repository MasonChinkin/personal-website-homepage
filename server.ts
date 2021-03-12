import express, { Request, Response } from 'express'
import path from 'path'

const app = express()
app.use(express.static(path.join(__dirname, 'build')))

interface ResponseWithString extends Response {
  send(body: string): this // types files used send(body: any)
}

// testing route
app.get('/ping', (req: Request, res: ResponseWithString): void => {
  res.send('pong')
})

// incorrect routes are redirected to '/' by react-router in ./App.tsx
app.get('/*', (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT: number = 8010
app.listen(PORT)
console.log(`Listening on port ${PORT}`)
