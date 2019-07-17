import React from 'react'
import {Spring} from 'react-spring/renderprops'


export default function aboutme() {
    return (

        <Spring
        from={{ opacity:0, marginTop:-500}}
         to={{ opacity:1, marginTop:0}}
         config={{delay:100,duration:1000}}
        >
            {props => (
                <div style= {props}>
            <div style={aboutmestyle}>
            <h1>Something About Me</h1> 
 
            <p>njfegfuegfg hgehgfeyugfhabg hv hgdhv hfdfdfg hg hgfafdffatdf hfagfadffdfjbhbh bhvghvhvh bvggcg bcgcgchbvbcgcgcg cgc</p>
            <img className="aboutmeimage"
            src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366__340.png" alt="myself"
         
            />
         </div>
            </div>
            
             ) }
        </Spring>
        
    )
}

const aboutmestyle={
background: 'steelblue',
fontweight:'bold',
color: 'white',
padding:'1.5rem',
justifycontent:'center'


}


    

