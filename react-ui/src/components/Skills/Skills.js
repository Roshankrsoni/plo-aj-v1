import React from 'react'
import BarGraph from '../BarGraph/BarGraph'
import './Skills.css'


function Skills(props){

        return <div className={"show-on-scroll col-md-7 page-1 text-left section skills " + props.class} >
            <div className="section-title grey4 h2 bold">Skills</div>

            {
                props.dbData.skills != undefined ? <div className="subsection">
                    <div className="subsection-title uppercase body-text grey3 letterspacing-1">Development</div>
                    <div className="subsection-data">
                    {
                        props.dbData.skills.development.map((ele,key) => {
                            return <div key={key} className="skill-bar-wrapper row no-gutters align-items-center">
                            <div className="skill-label grey-1 body-text bold col-md-2">{ele.skillName}</div>
                            <BarGraph class="col-md-10" value={ele.skillValue} currentStep={props.currentStep} sectionStep={5}/>
                            </div>
                        })
                    }

                    </div>
                </div>
                :
                '' 
            }
            {
                props.dbData.skills != undefined ? <div className="subsection">
                    <div className="subsection-title uppercase body-text grey3 letterspacing-1">Design</div>
                    <div className="subsection-data">
                    {
                        props.dbData.skills.design.map((ele,key) => {
                            return <div key={key} className="skill-bar-wrapper row no-gutters align-items-center">
                            <div className="skill-label grey-1 body-text bold col-md-2">{ele.skillName}</div>
                            <BarGraph class="col-md-10" value={ele.skillValue} currentStep={props.currentStep} sectionStep={5}/>
                            </div>
                        })
                    }

                    </div>
                </div>
                :
                '' 
              
            }
        </div>
    
}

export default Skills