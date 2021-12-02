import Header from "./Header/header"
import React, { useState } from 'react';

const Nath = () => {
    const data = [
      {
        title: "Coucou", 
        description: "bonjour", 
        url: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg"
      },
      {
        title: "Coucou2", 
        description: "bonjour", 
        url: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg"
      }
    ];

    const [items] = useState(data)
    console.log(items)

    return (
        <div>
            <Header/>
            {items.map(function (item) {
              return (
                <div>
                  <div className ={''}>{item.title}</div>
                  <div>{item.description}</div>
                  <div><img src={item.url} alt='introuvable'></img></div>

                </div>


              )
            })}

      
        </div>
        
    )
}


export default Nath