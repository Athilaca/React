import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const Changecolor = () => {
    const [color, setColor] = useState("yellow");
    const [value, setValue] = useState(true);

    
    const changeColor = () => {
        const newValue = !value;
        const newColor = newValue ? 'yellow' : 'blue';
        setColor(newColor);
        setValue(newValue)
    }

    return (
        <div>
           
                {/* Apply the dynamic background color */}
                <div  style={{ backgroundColor: color, height: 200, width: 200 }}></div>
            
        
            {/* Button to change the color */}
            <Button className="bg-primary" onClick={changeColor}>hello</Button>
        </div>
    );
}

export default Changecolor;
