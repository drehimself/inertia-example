import React from 'react'
import Layout from '@/Shared/Layout'

export default function Contact(props) {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>Contact to my first Inertia.js app!</p>
      <p>{props.foo}</p>
    </Layout>
  )
}
