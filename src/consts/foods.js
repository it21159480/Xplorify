const foods = [
  {
    id: '1',
    name: 'Spicy Garlic Noodles',
    type: 'Chinese',
    price: 20,
    image: { uri: ('https://lindseyeatsla.com/wp-content/uploads/2021/11/LindseyEats_Spicy_Garlic_Noodles-3.jpg') },
    details: 'Spicy Garlic Noodles are a flavorful and indulgent dish characterized by tender egg noodles tossed in a spicy and aromatic garlic sauce. This dish typically combines the heat of red chili flakes or chili oil with the pungent and savory flavors of minced garlic. It is a popular Asian-inspired noodle dish that offers a delightful balance of spice and umami, making it a favorite for those who enjoy bold and zesty flavors. Spicy Garlic Noodles can be customized with various toppings such as vegetables, protein (like shrimp or chicken), and herbs to suit individual preferences, making it a versatile and satisfying meal.',
    location: [
      latitude = 6.9267378440439735, // Replace with the latitude of your specific location
      longitude = 79.86535683456795,
      uri = ('https://lh5.googleusercontent.com/p/AF1QipPJELGPvAuoMVfJDhI4vAwXc8qXXev7rtFcTbfi=w408-h274-k-no')]//6.9267378440439735, 79.86535683456795

  },
  {
    id: '2',
    name: 'Biriyani',
    type: 'Indian',
    price: 45,
    image: { uri: ('https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/nasi-biriyani/main-header.jpg') },
    details: 'Biryani is a beloved South Asian rice dish, renowned for its exquisite blend of aromatic spices, tender meat (such as chicken, mutton, or beef), or vegetables, all layered with fragrant, long-grain basmati rice. This culinary masterpiece is a symphony of flavors, where spices like cardamom, cinnamon, and saffron come together to create a harmonious and delicious melody. Garnished with fried onions, fresh herbs, and sometimes boiled eggs, biryani is a celebratory dish cherished for its complexity of taste and cultural significance, often gracing festive tables and special occasions across the Indian subcontinent and beyond.',
    location: [
      latitude = 6.904811162210102, // 6.904811162210102, 79.95249365827819
      longitude = 79.95249365827819,
      uri = ('https://lh5.googleusercontent.com/p/AF1QipMX6P-n1gKBJEzQrds0jahxkvG_u0_a81-Wz3xK=s387-k-no')]
  },
  {
    id: '3',
    name: 'Vegetarian Burritos ',
    type: 'Mexican Cuisine',
    price: 15,
    image: { uri: ('https://www.mexicanplease.com/wp-content/uploads/2022/06/Vegetarian-Breakfast-Burritos-11.jpg') },
    details: 'Vegetarian burritos are a delicious and satisfying Mexican-inspired dish that consists of a tortilla wrap filled with a variety of vegetarian ingredients. These ingredients often include cooked rice, beans (such as black beans or pinto beans), sautéed or grilled vegetables (like bell peppers, onions, and zucchini), cheese, salsa, guacamole, and sour cream.'
    ,location: [
      latitude= 6.904834270669651, // 6.904834270669651, 79.9518797545788
      longitude= 79.9518797545788,
    uri = ('https://lh5.googleusercontent.com/p/AF1QipPQxVJ8kNS18weA3YC9fo4Cgbk1Hxi2Di21z_lk=w203-h100-k-no-pi-10-ya26.960016-ro-0-fo100')]
  },
  {
    id: '4',
    name: 'Creamy Boursin Pasta',
    type: 'Italian Cuisine',
    price: 30,
    image: { uri: ('https://thedizzycook.com/wp-content/uploads/2019/12/Boursin-pasta.jpg') },
    details: 'Creamy Boursin Pasta - is a delectable pasta dish characterized by a luscious and velvety sauce made with Boursin cheese. This dish combines perfectly cooked pasta with the rich and creamy Boursin cheese, resulting in a harmonious blend of flavors. Boursin cheese, known for its garlic and herb infusion, infuses the pasta with a delightful combination of creamy texture and savory, aromatic notes. Itis a quick and easy yet indulgent meal that is sure to satisfy your cravings for a creamy pasta delight.',
    location: [
      latitude= 6.9069342448316355, //6.9069342448316355, 79.97153652698803
      longitude= 79.97153652698803,
    uri = ('https://lh5.googleusercontent.com/p/AF1QipM9GkVVTmcxNGpeO7BmY4Wj3jPEYwe4kVgdxmXS=w408-h408-k-no')]
  },
];

export default foods;