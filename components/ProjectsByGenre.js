import {useState} from 'react' 

import Tabs from './Tabs'
import Projects from './Projects'

import { 
    getGenres,
    getProjects,
    filterProjectsByGenre
} from '../lib/api'

export default function ProjectsByGenre(){
    //init state
    //const [state,setstate] = useState(initialValue)
    const [activeGenre,setActiveGenre] = useState("Journalism");

    const genres = getGenres();
    const projectsList = getProjects();

    return <section>
        <h2>Projects by Genre</h2>
    <Tabs 
        items={genres}
        activeItem={activeGenre}
        clickHandler={setActiveGenre}
    />
    <Projects items={filterProjectsByGenre(projectsList,activeGenre)}/>
    </section>
}