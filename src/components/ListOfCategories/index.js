import React, { useEffect, useState } from 'react'
import { Category } from './../Category'
import { useFetch } from './../../hooks/useFetch'
import { List, Item } from './style'
import { Loading } from './../../styles/animation'
import { useShowFixed } from './../../hooks/useShowFixed'

export const ListOfCategories = () => {
  const { data, loading, error } = useFetch('https://petgram-server-edsf8xpy2.now.sh/categories')
  const [showFixed] = useShowFixed()

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        data.map(category => <Item key={category.id}> <Category {...category} path={`/pet/${category.id}`} /> </Item>)
      }
    </List>
  )

  if (loading) return <Loading />

  if (error) return <h3>error inesperado</h3>

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  )
}  
