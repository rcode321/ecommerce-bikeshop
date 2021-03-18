const INITIAL_STATE = {
  sections: [
    {
      title: "MOUNTAIN BIKES",
      imageUrl:
        "https://res.cloudinary.com/dlkrofont/image/upload/v1615636896/MT-Bike/Bike-Brands_jw3mob.jpg",
      id: 1,
      linkUrl: "MountainBikes",
    },

    {
      title: "FOLDING BIKES",
      imageUrl:
        "https://res.cloudinary.com/dlkrofont/image/upload/v1615637006/Folding-Bike/158079148_2837247746593864_4640089681913904497_n_ps4wgm.jpg",
      id: 2,
      linkUrl: "",
    },
    {
      title: "E-BIKES",
      imageUrl:
        "https://res.cloudinary.com/dlkrofont/image/upload/v1615636943/E-Bike/HTB17NdNlnnI8KJjSszgq6A8ApXa4_xtduvh.jpg",
      id: 3,
      linkUrl: "",
    },
    {
      title: "BMX",
      imageUrl:
        "https://res.cloudinary.com/dlkrofont/image/upload/v1615636829/BMX/framed-impact-18-kids-bmx-bike-black-yellow-20_qxzif5.webp",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "ROAD BIKES",
      imageUrl:
        "https://res.cloudinary.com/dlkrofont/image/upload/v1615636970/Road-Bike/35218_q9r2gk.jpg",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
