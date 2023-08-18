
interface categoryItem{
  id:number,
  name:String,
  description:String,
  price:number,
  promoted?:boolean,
  imageSrc:String
}

type recItems = categoryItem[]

export const recommendedItems : recItems = [
    {
      id: 1,
      name: "Mocha Cookie Crumbelite",
      description:
        "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
      price: 484,
      promoted:true,
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Mocha Cookie Crumbelite",
      description:
        "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
      price: 484,
      imageSrc:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 1,
      name: "Mocha Cookie Crumbelite",
      description:
        "Our Mocha Cookie crumble Latte is a deliciously flavoured mochaindulgence - Hot coffee meets chocolate and co",
      price: 484,
      promoted:true,
      imageSrc:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];