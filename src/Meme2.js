import React from "react";

export const Meme2 = ({ template, onClick }) => {
    return (
        <div>
            <h3>{template.name}</h3>
            <img 
                width={400}
                height={400} 
                key={template.id} 
                src={template.url} 
                alt={template.name}
                onClick={onClick}
        />
        
      </div>
    )
}