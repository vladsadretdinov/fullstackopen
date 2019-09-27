import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  // const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  // const vote = (id) => {
  //   const anecdote = anecdoteById(id)

  //   const voted = {
  //     ...anecdote,
  //     votes: anecdote.votes + 1
  //   }

  //   setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  // }

  return (
    <Router>
      <div>
        <h1>Software anecdotes</h1>
        <Menu />
        <Route exact path="/" render={() => <AnecdoteList anecdotes={anecdotes}/>} />
        <Route exact path="/create" render={() => <CreateNew addNew={addNew}/>} />
        <Route exact path="/about" render={() => <About/>} />
        <Route exact path="/anecdotes/:id"
          render={({match}) => <Anecdote anecdote={anecdoteById(match.params.id)}/>} 
        />
        <Footer />
      </div>
    </Router>
  )
}

export default App;