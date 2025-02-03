import './App.css'
import * as HeroApi from './services/api.service';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data: heroes } = await HeroApi.getHeroes();
        setHeroes(heroes);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, [heroes])

  const {
    register,
    handleSubmit,
  } = useForm()

  async function onSubmit(data) {
    try {
      console.log(data);
      await HeroApi.createHero(data);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <>
      <div>
        <h1>1. Create a hero</h1>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px'}} onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder='Enter hero name' {...register('name', { required: true })}/>
          <input type='text' placeholder='Enter hero superpower' {...register('superpower', { required: true })}/>
          <input type='number' placeholder='Enter hero humility' {...register('humility', { required: true })}/>
          <button type='submit'>Create Hero</button>
        </form>
      </div>
      <div>
        <h1>2. See your hero in the list</h1>
        <ul>
          <li>
            {heroes.map((hero, index) => (
              <div key={index}>
                <p>{hero.name} - Superpower: {hero.superpower} - Humility: {hero.humility}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
