import { connect as originalConnect } from 'react-redux'

export default function connect(a, b, c, d = { withRef: true }) {
  return originalConnect(a, b, c, d)
}
