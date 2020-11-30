import React from 'react';
import Projects from '../data/projects'
import {useParams} from 'react-router-dom'
import { FilterFrames } from '@material-ui/icons';
import NotFound from './NotFound';

function ProjectPage(props){
    // console.log(params);
    // let project = null;
    // if (params.project in Projects) {
    //   project = Projects[params.project];
    // }
    let project = null;
    if(props.match.params.project in Projects){
        project = Projects[props.match.params.project]
    }
    else{
        return(
            <NotFound></NotFound>
        )
    }

    return(
        <div>
            <div>
                {project.title}
            </div>
            <img src={project.image} alt={project.title} />
        </div>
    )
}

export default ProjectPage;