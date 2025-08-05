import React from 'react'
export default function Test({item:{title, url, athour, points}}) {
  return (
    <>
      <li>
        {title}
      </li>
      <li>
        {url}
      </li>
      <li>
        {athour}
      </li>
      <li>
        {points}
      </li>
   </>
  )
}
