import { Box } from 'components/layouts/box'
import React from 'react'
import styles from './variation.module.css'
import NextImage from 'next/image'

interface SliceProps {
  preview: string
  name: string
  id: number
  add: () => void
}

export function Variation({
  preview,
  name,
  id,
  add,
  ...restProps
}: SliceProps): JSX.Element {
  return (
    <Box as="div" className={styles.root} {...restProps}>
      <NextImage height="126" width="232" src={preview} />
      <Box as="button" onClick={add}>
        Add
      </Box>
    </Box>
  )
}
