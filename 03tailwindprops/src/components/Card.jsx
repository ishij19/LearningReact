import React from 'react'

function Card(username) {
  console.log(username);
  
    return (
        <ion-card>
  <img alt="Silhouette of mountains" src="https://images.pexels.com/photos/20117788/pexels-photo-20117788/free-photo-of-desert-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    Here's a small text description for the card content. Nothing more, nothing less.
  </ion-card-content>
</ion-card>
    )
}

export default Card
