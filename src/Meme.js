import React from "react";

export const Meme = ({ template, onClick }) => {
    return (
        <div>
            <h3>{template.name}</h3>
            <img 
                width={200}
                height={200} 
                key={template.id} 
                src={template.url} 
                alt={template.name}
                onClick={onClick}
        />
        
      </div>
    )
}