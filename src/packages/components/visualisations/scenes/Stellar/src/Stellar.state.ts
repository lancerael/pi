import { signal } from '@preact/signals-react'
import { Star } from './Stellar.types'

export const stars = signal<Star[]>([])
