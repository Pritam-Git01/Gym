import React from 'react';
import styles from "./program.module.css";
import Card from '../../atoms/Program_Cards/card';

const Program = () => {
    const programDataData = [
        {
          id: 1,
          image: "https://img.freepik.com/free-photo/tall-stylish-shirtless-bodybuilder-dressed-sports-shorts-doing-exercise-bicep-with-barbell-standing-studio-isolated-dark-background_613910-18341.jpg?size=626&ext=jpg",
          text: "Bodybuilding",
        },
        {
          id: 2,
          image: "https://c4.wallpaperflare.com/wallpaper/420/477/268/trees-palm-trees-girls-yoga-wallpaper-preview.jpg",
          text: "Yoga",
        },
        {
          id: 3,
          image: "https://c4.wallpaperflare.com/wallpaper/1017/46/488/group-fitness-class-located-step-wallpaper-preview.jpg",
          text: "Aerobic",
        },
        {
          id: 4,
          image: "https://c1.wallpaperflare.com/preview/327/472/938/stretch-exercise-leggings-woman.jpg",
          text: "Flexiblity",
        },
        {
          id: 5,
          image: "https://c1.wallpaperflare.com/preview/323/639/674/zumba-dance-gymnastics.jpg",
          text: "Zumba Dance",
        },
        {
          id: 6,
          image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          text: "Weight Liffting",
        }
      ];
  return (
    <div  className={styles.container}>
      <h1 style={{marginBottom: "1.5rem"}}>Program</h1>
    <div className={styles.wraper}>
      
        {programDataData.map(item => <div  key={item.id}><Card data={item}/></div>)}
       
        
    </div>
    </div>
  )
}

export default Program