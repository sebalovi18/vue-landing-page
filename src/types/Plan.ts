import type { Component } from 'vue'

export interface Plan {
  id: string
  name: string
  shortDescription: string
  price: string
  priceDescription: string
  features: Array<{
    description: string
    icon: Component
    iconColor: string
  }>
}