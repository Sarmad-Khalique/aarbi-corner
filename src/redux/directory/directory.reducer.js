const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageURL:
        "https://www.maxpixel.net/static/photo/1x/Hat-Manufacture-Music-Hats-Stack-Felt-Manufactory-1365955.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrDZ5UsQaHBqV_AR1N_W47G4bInYoJEMh1Q&usqp=CAU",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageURL:
        "https://static01.nyt.com/images/2021/05/27/fashion/24SNEAKERCOLORS-sacai-SUB/24SNEAKERCOLORS-sacai-SUB-facebookJumbo.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "men",
      imageURL:
        "https://images.medicinenet.com/images/article/main_image/average-height-for-men.jpg",
      size: "h-96",
      id: 4,
      linkUrl: "shop/men",
    },
    {
      title: "women",
      imageURL:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      size: "h-96",
      id: 5,
      linkUrl: "shop/women",
    },
  ],
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
