import React from 'react';
import '../../assets/css/fields.css';
import Section from '../molecules/section.js';
import VerticalList from '../../components/molecules/vertical-list.js'

function Fields() {
    return (
        <Section
            headline={
                {
                    "title": "Fields",
                    "fontawesome": ["fas", "layer-group"]
                }
            }
            className="fields"
            body={
                <div className="field-section-body d-flex flex-row justify-content-center default-font">
                    <VerticalList
                        title="Infrastructure"
                        contents={["AWS (EKS,ECS,Lambda,...)", "Heroku", "Kubernetes"]}
                    />
                    <VerticalList
                        title="Backend"
                        contents={["Spring", "Django", "Rails", "Express", "Echo"]}
                    />
                    <VerticalList
                        title="Frontend"
                        contents={["React", "jQuery"]}
                    />
                </div>
            }
        />
    );
}

export default Fields;